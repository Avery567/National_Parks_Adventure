import { Button, Space, Modal, InputNumber, Form, Input, message } from 'antd';
import { useState, useEffect } from 'react';
import { PlusOutlined, DeleteOutlined, ExclamationCircleOutlined,  DollarCircleOutlined, UserOutlined, UsergroupDeleteOutlined  } from '@ant-design/icons';
import { Popconfirm, Popover, Avatar } from 'antd';
import PackingList from "./PackingList";
import { DatePicker } from 'antd';
import TripmateList from "./TripmateList";

function TripCard({ parkDetails, trip, user, handleDeleteTrip }) {
//  console.log(trip)
//   console.log(trip.parkdetails[0].images)
const { RangePicker } = DatePicker;

    return (
 
            <div id="tripcard">
                <h2>Park Name: {trip.name}
                  <RangePicker />
                </h2> 
                <p><button onClick = {() => handleDeleteTrip(trip.id)}>Remove Trip</button></p>     
                <img src= {trip.parkdetails[0].images} height="300rem" width="400rem"/>
                <p>Description: {trip.parkdetails[0].description}</p>
                <p>State: {trip.parkdetails[0].states}</p>
                <p>Contacts: {trip.parkdetails[0].contacts}</p>
                <p>Entrance Fee: {trip.parkdetails[0].entrancefee}</p>
                <p>Directions: {trip.parkdetails[0].directionsinfo}</p>
                <p>Directions Url: {trip.parkdetails[0].directionsurl}</p>
                <p>Operating Hours: {trip.parkdetails[0].operatinghours}</p>
                <p>Addresses: {trip.parkdetails[0].addresses}</p>
                <p>Weather Info: {trip.parkdetails[0].weatherinfo}</p>

                <PackingList trip={trip} user={user}/>
                {/* <TripmateList trip={trip}user={user}/> */}
            </div>
 
    )
}

export default TripCard