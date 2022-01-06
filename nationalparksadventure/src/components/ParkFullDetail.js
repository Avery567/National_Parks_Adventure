import {Routes, Link, Route, useNavigate, useParams} from "react-router-dom";
import React, { useEffect, useState } from "react";
import '../parkdetail.css'
import green2 from '../asset/green2.jpg';

function ParkFullDetail ({parks, handleCreateTrip}) {
// console.log(parks)

const { id } = useParams();
  // console.log(id)
  return (
    <>
  <img src={green2} alt="parkfulldetail" className="parkfulldetail_image"/>

  <div className="app">

          {parks.filter(park => park.id === id).map(park => {
 
              return (
                
                <div className="details" key={ park.id }>

                    <div className="big-img">
                      <img src= {park.images[0].url} height="500rem" width="700rem"/>
                    </div>
                    <div className="box">
                        <div className="row">
                            <h2>{park.fullName}</h2>
                            <span>State: {park.states}</span>
                        </div>
                        <button className="cart" onClick={() => handleCreateTrip(park.fullName)}><Link to="/dashboard" style={{textDecoration:"none", color: "white"}}>Plan A Trip</Link></button>
                        <div className="content">
                            <p>Description: {park.description}</p>
                            <p>Entrance Fee: {park.entranceFees[0].cost}</p>
                            <p>Directions: {park.directionsInfo}</p>
                            <p>Location: {park.latLong}</p>
                            <p>Directions Url: {park.directionsUrl}</p>
                            <p>Weather Info: {park.weatherInfo}</p>
                            {/* <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} /> */}
                        </div>
                      </div>
                </div>
              )})}

  </div>
  </>
    )
  }
  
  export default ParkFullDetail