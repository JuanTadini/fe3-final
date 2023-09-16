import React, { useState } from "react";
import { useDentistStates } from "./Context/Context";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const {state} = useDentistStates()
  const [user, setUser] = useState({
    name: '',
    email: ''
  })
  const [error, setError] = useState(false);
  const [form, setForm] = useState(false)

  const onSubmitForm = (e) => {
    e.preventDefault();
    setForm(true)
    if (user.name.trim().length > 5 && user.email && regex.test(user.email)) {
      setUser(user)
      setError(false)
      console.log('El formulario se completo correctamente')
    } else {
      setError(true)
      console.log('Por favor verifique que los datos sean correctos')
    }
  }

  return (
    <div>
      <form onSubmit={onSubmitForm} className={state.theme ? 'dark' : ''}>
        <label>Please enter your name</label>
        <input type="text" onChange={(event) => setUser({...user, name: event.target.value})}/>
        <label>Please enter your email</label>
        <input type="text" onChange={(event => setUser({...user, email: event.target.value}))}/>
        <button type="submit">Submit</button>
        {form && error && <h3 style={{color: 'red'}}>Por favor verifique su información nuevamente</h3>}
        {form && !error && <h3 style={{color: 'green'}}>Gracias {user.name}, te contactaremos cuando antes vía mail</h3>}
      </form>
    </div>
  );
};

export default Form;
