import { useEffect, useState } from "react"
import { Collapse, message } from 'antd';
import TripCard from "./TripCard";


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
        <div id="tripcontainer">
        <Collapse>
        
            {trips.map(trip=> {
                return (
                <Panel header={`Trip to: ${trip.name}`} key={trip.id} >
                    <TripCard key={trip.id} trip={trip} trips={trips} setTrip={setTrip} user={user} parks={parks} parkDetails={parkDetails} handleDeleteTrip={handleDeleteTrip}/>
                </Panel>)
            })} 
        </Collapse>
        </div>
        <div>
        </div>
      </>
    )
}

export default TripContainer