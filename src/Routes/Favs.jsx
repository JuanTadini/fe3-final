import React from "react";
import Card from "../Components/Card";
import { useDentistStates } from "../Components/Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {state} = useDentistStates()
  return (
    <>
      <h1 className={state.theme ? 'dark' : ''}>Favorite Dentists</h1>
      <div className={state.theme ? 'card-grid dark' : 'card-grid'}>
        {state.favs.map(fav => <Card {...fav} key={fav.id}/>)}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
