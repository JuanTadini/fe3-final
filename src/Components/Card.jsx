import React from "react";
import doctorImage from "../images/doctor.jpg"
import { Link } from "react-router-dom";
import { useDentistStates } from "./Context/Context";

const Card = ({ name, username, id }) => {

  const {state, dispatch} = useDentistStates()

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    // if (favs.find((idBuscado) => idBuscado === id)) {
    // }
    dispatch({type: 'ADD_FAV', payload: {name, username, id}})
    // setFavs([...favs, {name, username, id}])
  }

  return (
    <div className={state.theme ? 'card dark' : 'card'}>
      <div>
        <Link to={'/detail/' + id}>
          <img src={doctorImage} alt="Card placeholder" width='95%'/>
          <h4>{name}</h4>
          <h5>{username}</h5>
          <h5>id: {id}</h5>
          {/* En cada card deberan mostrar en name - username y el id */}

          {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        </Link>

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
      </div>
    </div>
  );
};

export default Card;
