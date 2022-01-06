import { Button, Space, Modal, InputNumber, Form, Input, message } from 'antd';
import { useState, useEffect } from 'react';
import { PlusOutlined, DeleteOutlined, ExclamationCircleOutlined,  DollarCircleOutlined, UserOutlined, UsergroupDeleteOutlined  } from '@ant-design/icons';
import { Popconfirm, Popover, Avatar } from 'antd';
import PackingList from "./PackingList";
import { DatePicker } from 'antd';
import TripmateList from "./TripmateList";
import styled from 'styled-components';

function TripCard({ setTrip, trip, trips, user, handleDeleteTrip }) {
//  console.log(trip)
//   console.log(trip.parkdetails[0].images)
// const { RangePicker } = DatePicker;

    return (
              <TripDetail>
                  <SectionOne>
                    <YourParkDetails>
                      {/* <ParkDetailContainer>
                       <Detail> */}
                          <Title>
                              Park Details
                              {/* <RangePicker /> */}
                              <p><Button icon={<DeleteOutlined  />} onClick = {() => handleDeleteTrip(trip.id)}>Remove This Trip</Button></p>   

                         </Title>
                   
                            <ParkImage>
                                <img src= {trip.parkdetails[0].images} height="300rem" width="400rem" />
                            </ParkImage>
                            <Subtitle>
                                  <p>Description: {trip.parkdetails[0].description}</p>
                                  <p>State: {trip.parkdetails[0].states}</p>
                                  <p>Contacts: {trip.parkdetails[0].contacts}</p>
                                  <p>Entrance Fee: {trip.parkdetails[0].entrancefee}</p>
                                  <p>Directions: {trip.parkdetails[0].directionsinfo}</p>
                                  <p>Directions Url: {trip.parkdetails[0].directionsurl}</p>
                                  <p>Operating Hours: {trip.parkdetails[0].operatinghours}</p>
                                  <p>Addresses: {trip.parkdetails[0].addresses}</p>
                                  <p>Weather Info: {trip.parkdetails[0].weatherinfo}</p>
                             </Subtitle>
                        {/* </Detail>
                      </ParkDetailContainer> */}
                    </YourParkDetails>
                </SectionOne>
                <SectionTwo>
                    <ColumnRight1>
                          <PackingList trip={trip} user={user}/>
                    </ColumnRight1>
                    <ColumnRight2>
                         <TripmateList trip={trip} trips={trips} user={user} setTrip={setTrip}/>
                    </ColumnRight2>
                </SectionTwo>
              </TripDetail>
 
    )
}

export default TripCard

const TripDetail = styled.div` 
    overflow-y: auto;
    padding: 15px;
    height: 50vh;

  //   &::-webkit-slider-thumb {
  //     -webkit-appearance: none;
  //     width: 15px;
  //     height: 15px;
  //     border:1px solid red;
  //  };
`;

const SectionOne = styled.div` 
  width: 50%;
  float: left;
  padding: 20px;

`;

const SectionTwo = styled.div` 
  width: 50%;
  float: left;
  padding: 20px;
 
`;

const ColumnRight1 = styled.div` 
  display: flex;
  flex-direction: column;
  width: 28rem;

`;

const ColumnRight2 = styled.div` 
    display: flex;
    flex-direction: column;
    width: 28rem;
    margin-top: 2rem;

`;

const YourParkDetails = styled.div` 
    height:70;
    background-color: #e6e4ff ;
    margin:0;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0px 2px 5px lightgrey;
    transition: 0.4s ease-in-out;
    &: hover {
        box-shadow: 0px 2px 5px lightgrey;
    }

`;

const ParkDetailContainer = styled.div` 
 display: flex;
 alight-items: center;
 margin-bottom: 0.3rem;

`;

const Detail = styled.div` 
 margin-left:1rem;
 justify-content: space-around;
 align-items: left;

`;
const Title = styled.h2` 
 font-weight: 500;
 display: flex;
 gap:1rem;
 align-items: left;
`;

const Subtitle = styled.h4` 
  font-weight: 500;
  // display: flex;
  margin-top:1.1rem;
`;

const ParkImage = styled.div` 
  margin-right:1rem;
  img{
    border-radius: 1rem;
    height: 20rem;
    width: 25rem;
  }  
 
`;