import {Link} from "react-router-dom";
import React, { useEffect, useState } from "react";
import PackingCard from "./PackingCard";


function PackingList ({trip, user}) {
  const [packingList, setPackingList] = useState(trip.packinglists)
  const [errors, setErrors] = useState([]);

  // const handleAddItem = () => {
  //   fetch("/api/packinglists", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //           trip_id: trip.id,
  //           name: itemName,
  //           price: itemValue,
  //           user_id: user.id
  //       }),
  //   }).then(r=>{
  //           if (r.ok) {
  //               r.json().then((new_item=>{
  //                 setPackingList([...packingList, new_item])
  //                   success()
  //               }))
  //           } else {
  //               r.json().then((err)=>setErrors([...errors, err.errors]))
  //           }
  //       })
  //   form.resetFields()
  // }

  return (
 
    <div id="tripmate" >
            <p>Packing List:</p>
            <PackingCard/>
            <button onClick={handleAddItem}>Add New Item</button>  

    </div>

  )
}

export default PackingList