import {Link} from "react-router-dom";
import React, { useEffect, useState } from "react";

function ParkCard ({park}) {

  return (
 <>
  <div id="parkcard" >
        <img variant="top" src= {park.images[0].url} height="300rem" width="400rem"/>
        <p>{park.fullName}</p>
        <p><Link to={`/parkcontainer/${park.id}`}>View More Park Details</Link></p>
        <p>State:{park.states} </p>
  </div>
</>
  )
}

export default ParkCard