import React, { useEffect, useState } from 'react';
import Displayactor from '../Displayactor/Displayactor';
import Selected from '../Selected/Selected';
import './Actor.css'

const Actor = () => {
  const [actors , setActors] = useState([])
  const [selected , setSelected] = useState([]);
  useEffect(() => {
  fetch('./data.JSON')
  .then(res => res.json())
  .then(data => setActors(data))
  },[])

  const handleSelect = (actor) => {
    const newSelected = [...selected, actor];
    setSelected(newSelected)
  }
  
  return (
    <div className="web-container">
      <div>
         <div className="acotor-container">
         {
           actors.map(actor => <Displayactor
             handleSelect ={handleSelect}
             actor={actor}></Displayactor> )
         }
         </div>
      </div>
      <div className="selected-container">
         <Selected selected={selected}></Selected>
      </div>  
    </div>
  );
};

export default Actor;
//  <Selected selected={selected}></Selected>