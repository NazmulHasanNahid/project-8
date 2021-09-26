import React from 'react';
import './Displayactor.css' ;

const DisplayActor = (props) => {
  //console.log(props)
  const {name , age , height , character ,cost , img} = props.actor
  return (
    <div className="card">
       <img className="pictures" src={img} alt="" />
       <h2>Name : {name}</h2>
       <h3>Age  : {age}</h3>
       <h4>Height : {height}</h4>
       <p>Character : {character}</p>
       <p>Cost : ${cost}</p>
        <div className="icon">
          <span>
            <h1><i class="fab fa-facebook-square"></i></h1>
          </span> 
          <span>
            <h1><i class="fab fa-twitter-square"></i></h1>
          </span>
        </div>
       <button 
       onClick={() => props.handleSelect(props.actor)}
       className="selected-btn"
       ><i class="fas fa-check-square"></i> Select Artist</button>
       
    </div>
  );
};

export default DisplayActor;