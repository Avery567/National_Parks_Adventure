import {Link} from "react-router-dom";
import React, { useEffect, useState } from "react";
import '../parkcontainer.css'

function ParkCard ({park}) {

  return (
 <>
  <div id="parkcard" className="card" >
      <div className="card__image-container">
        <img variant="top" src= {park.images[0].url} height="300rem" width="400rem"/>
      </div>
      <div className="card__content">
        <p className="card__title titletext--medium">{park.fullName}</p>
        <div className="card__info">
          <p className="card__button text--medium"><Link to={`/parkcontainer/${park.id}`} style={{textDecoration:"none", color: "white"}}>View Details</Link></p>
          <p className="text--medium">Location:{park.states} </p>
        </div>
      </div>
  </div>
</>
  )
}

export default ParkCard