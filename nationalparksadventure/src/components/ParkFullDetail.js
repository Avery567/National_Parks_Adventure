import {Routes, Link, Route, useNavigate, useParams} from "react-router-dom";
import React, { useEffect, useState } from "react";
import '../parkdetail.css'

function ParkFullDetail ({parks, handleCreateTrip}) {
// console.log(parks)

const { id } = useParams();
  // console.log(id)
  return (

  <div className="app">
        <div className="explore-container">
          {parks.filter(park => park.id === id).map(park => {
 
              return (
                <div className="full-card" key={ park.id }>
                  <img src= {park.images[1].url} height="500rem" width="700rem"/>
                  <h2>Name: {park.fullName}</h2>
                  <button onClick={() => handleCreateTrip(park.fullName)}><Link to="/dashboard">Plan A Trip</Link></button>
                  <p>Description: {park.description}</p>
                  <p>State: {park.states}</p>
                  <p>Entrance Fee: {park.entranceFees[0].cost}</p>
                  <p>Directions: {park.directionsInfo}</p>
                  <p>Location: {park.latLong}</p>
                  <p>Directions Url: {park.directionsUrl}</p>
                  <p>Weather Info: {park.weatherInfo}</p>
                </div>
              )})}
        </div>
      </div>
    )
  }
  
  export default ParkFullDetail