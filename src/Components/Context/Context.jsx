import { useContext, createContext, useState, useReducer, useEffect } from "react";
import axios from 'axios'

// export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext();

const reducer = (state, action) => {
	switch (action.type) {
		case 'GET_DENTISTS':
			return {...state, dentists: action.payload}
		case 'GET_DENTIST':
			return {...state, dentist: action.payload}
		case 'ADD_FAV':
			return {...state, favs: [...state.favs, action.payload]}
		case 'SWITCH_THEME':
			return {...state, theme: !state.theme}
		default:
			break;
	}
}

const localFavs = JSON.parse(localStorage.getItem('favs'))
const initialFavState = localFavs ? localFavs : []

const initialState = {
	dentists: [],
	dentist: {},
	favs: initialFavState,
	theme: false
}

export const ContextProvider = ({ children }) => {
	//Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

	const [state, dispatch] = useReducer(reducer, initialState)
	// // const [dentists, setDentists] = useState([])
	// const [favs, setFavs] = useState(initialFavState)
	// const [theme, setTheme] = useState(false)

	const url = 'https://jsonplaceholder.typicode.com/users'

	useEffect(() => {
		axios(url)
		.then(res => dispatch({type: 'GET_DENTISTS', payload: res.data}))
	}, [])

	useEffect(() => {
		localStorage.setItem('favs', JSON.stringify(state.favs))
	}, [state.favs])

	

	return (
		<ContextGlobal.Provider value={{state, dispatch}}>
		{children}
		</ContextGlobal.Provider>
	);
};

export default ContextProvider

export const useDentistStates = () => useContext(ContextGlobal)