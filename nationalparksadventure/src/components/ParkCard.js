import {Link} from "react-router-dom";
import React, { useEffect, useState } from "react";
import '../parkcontainer.css'

function ParkCard ({park}) {

  return (
 <>
  <div id="parkcard" class="card" >
      <div class="card__image-container">
        <img variant="top" src= {park.images[0].url} height="300rem" width="400rem"/>
      </div>
      <div class="card__content">
        <p class="card__title text--medium">{park.fullName}</p>
        <div class="card__info">
          <p class="card__button text--medium"><Link to={`/parkcontainer/${park.id}`} style={{textDecoration:"none", color: "white"}}>View Details</Link></p>
          <p class="card__button text--medium">Location:{park.states} </p>
        </div>
      </div>
  </div>
</>
  )
}

export default ParkCard