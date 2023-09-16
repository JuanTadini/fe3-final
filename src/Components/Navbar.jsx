import React from 'react'
import { Link } from 'react-router-dom'
import { useDentistStates } from './Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state, dispatch} = useDentistStates()

  const toggleTheme = () => {
    dispatch({type: 'SWITCH_THEME'})
    // if (theme) {
    //   setTheme(false)
    //   console.log('el tema cambio a light')
    // } else {
    //   setTheme(true)
    //   console.log('el tema cambio a dark')
    // }
  }

  return (
    <nav className={state.theme ? 'dark' : ''}>
      <Link to='/'>Home</Link>
      <Link to='/favs'>Favorites</Link>
      <Link to='/contact'>Contact</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={toggleTheme}>Change to {state.theme ? 'light' : 'dark'} theme</button>
    </nav>
  )
}

export default Navbar