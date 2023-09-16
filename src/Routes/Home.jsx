import React from 'react'
import Card from '../Components/Card'
import { useContext } from 'react'
import { useDentistStates } from '../Components/Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {state} = useDentistStates()

  return (
    <main className={state.theme ? 'dark' : ''} >
      <h1>Home</h1>
      <div className='card-grid'>
        {state.dentists.map(dentist => (<Card {...dentist} key={dentist.id}/>))}
      </div>
    </main>
  )
}

export default Home