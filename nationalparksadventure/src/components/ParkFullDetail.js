import {Routes, Link, Route, useNavigate, useParams} from "react-router-dom";
import React, { useEffect, useState } from "react";

function ParkFullDetail ({parks}) {
// console.log(parks)
const { id } = useParams();
  
  return (

  <div className="full-detail">
        <div className="explore-container">
          {parks.filter(park => park.id === id).map(park => (
                <div className="full-card" key={ park.id }>
                  <img src= {park.images[0].url}/>
                  <h2>Name: {park.fullName}</h2>
                  <button><Link to="/dashboard">Plan A Trip</Link></button>
                </div>
              ))}
        </div>
      </div>
    )
  }
  
  export default ParkFullDetail