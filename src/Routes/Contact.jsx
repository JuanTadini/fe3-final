import React from 'react'
import Form from '../Components/Form'
import { useDentistStates } from '../Components/Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  const {state} = useDentistStates()

  return (
    <div className={state.theme ? 'dark' : ''}>
      <section className='contact-text'>
        <h2>Want to know more?</h2>
        <p>Send us your questions and we will contact you</p>
      </section>
      <Form/>
    </div>
  )
}

export default Contact