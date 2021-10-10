import React, { useState } from 'react'
import data from './data.json'
import './Card.css'
//import {Button} from "react-bootstrap"
//import Card from '@mui/material/Card';
function Cards() {
    const [text,setText]=useState("connect");
    const changeText=(text)=>setText(text);
const removeItem=(id)=>{
    console.log("clicked");
    
// alert(id);
}
    return (
        <div className="card-container">
  
            {
           data.map(dat=>
           <>
            <div className="cards">
                <button className="remove"onClick={()=>removeItem(dat.id)} >X</button>
            <img src={dat.img}/>
                <h1>{dat.name}</h1>
<p>{dat.email}</p>
<button className="connect" onClick={()=>changeText("request Sent")}>{text}</button>
</div>
</>
              )
}
        </div>
    )
}

export default Cards
