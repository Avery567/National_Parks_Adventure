import { useEffect, useState } from "react"
import { Collapse, message } from 'antd';
import TripCard from "./TripCard";


function TripContainer({trips, setTrip, parks}) {

    const { Panel } = Collapse;

    const handleDeleteTrip = (id) => {
        console.log("deleted")
        fetch(`/api/trips/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(r=>r.json())
        .then(setTrip(trips.filter(trip => trip.id !== id)))
    }


//     const handleDeleteTab = (id) => {
//         fetch(`/api/tabs/${id}`, {
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//         })
//         .then(r=>r.json())
//         .then(setTabs(tabs.filter(tab => tab.id !== id)))
//     };
//     const success = () => {
//         message.success('Settle successful, check it out in Completed Tabs');
//       };

//     function handleSettle(id) {
//         fetch(`/api/tabs/${id}`,{
//             method: "PATCH",
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 completed: true
//             })
//         }).then(r=>{
//             if (r.ok) {
//                 let newTabs = tabs.filter(tab=>{
//                     return tab.id!==id
//                 })
//                 setTabs(newTabs)
//                 success()
//             }
//         })
//     }

    return(
      <>
        <div id="tripcontainer">
        <Collapse>
            {trips.map(trip=> {
                return (
                <Panel header={`Trip to: ${trip.name}`} key={trip.id} >
                    <TripCard key={trip.id} trip={trip} parks={parks} handleDeleteTrip={handleDeleteTrip}/>
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