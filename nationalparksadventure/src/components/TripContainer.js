import { useEffect, useState } from "react"
import { Collapse, message } from 'antd';
import TripCard from "./TripCard";
import styled from 'styled-components';
import '../App.css'

function TripContainer({parkDetails, trips, setTrip, parks, user}) {
// console.log(trips)
    const { Panel } = Collapse;

    const handleDeleteTrip = (id) => {
        // console.log("deleted")
        fetch(`/api/trips/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(r=>r.json())
        .then(setTrip(trips.filter(trip => trip.id !== id)))
    }

// console.log(trips)
    return(
      <>
      <div id="currenttabs" >
        <Collapse>
            {trips.map(trip=> {
                return (

                <Panel header={<h3>{`Trip to: ${trip.name}`}</h3>} key={trip.id} >
                    <TripCard key={trip.id} trip={trip} trips={trips} setTrip={setTrip} user={user} parks={parks} parkDetails={parkDetails} handleDeleteTrip={handleDeleteTrip}/>
                </Panel>
            )
            })} 
        </Collapse>
        </div>
      </>
    )
}

export default TripContainer;

