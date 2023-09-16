import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDentistStates } from '../Components/Context/Context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const {state, dispatch} = useDentistStates()
  const params = useParams()

  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`

  useEffect(() => {
    axios(url)
    .then(res => dispatch({type: 'GET_DENTIST', payload: res.data}))
  }, [])
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1 className={state.theme ? 'dark' : ''}>Detail Dentist {params.id}</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <section className={state.theme ? 'user-info dark' : 'user-info'}>
        <h2>Name: {state.dentist.name}</h2>
        <h3>Email: {state.dentist.email}</h3>
        <h3>Phone: {state.dentist.phone}</h3>
        <h3>Website: {state.dentist.website}</h3>
      </section>
    </>
  )
}

export default Detail