import React, { useEffect, useState } from "react";
import { Form, Input, Button, message } from 'antd';
import "antd/dist/antd.css";
import LandingPage from "./LandingPage";
import Header from "./Header";
import ParkContainer from "./ParkContainer";
import ParkFullDetail from "./ParkFullDetail";
import ContactUs from "./ContactUs";
import Dashboard from "./Dashboard";
import {Routes, Route, useNavigate} from "react-router-dom"

function App() {
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState([]);
  const [search, setSearch] = useState('');
  const [parks, setParks] = useState([]);
  const [parkDetails, setParkDetails] = useState([]);
  const [trips, setTrip] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    fetch('/api/trips').then(r=>r.json()).then(setTrip)
  },[])

  const handleSearch = (userInput) => {
    setSearch(userInput)
    navigate("/parkcontainer")
  };

  useEffect(() => {
    fetch ('https://developer.nps.gov/api/v1/parks?limit=495&api_key=qeE5JzYsOC3owspHxF6feYL8A2AOfa9WsIq78pUn')
    .then(resp => resp.json())
    .then (data => {
      setParks(data.data)
    })
  } , []);



  const searchResults = () => {
    if (search.length > 0) {
      return parks.filter(park => park.fullName.toLowerCase().includes(search.toLowerCase())),
      parks.filter(park => park.description.toLowerCase().includes(search.toLowerCase()))
    } else {
      return parks
    }
  };

  function handleLogoutClick() {
    fetch("/api/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
        setUser(null)
        navigate("/")
        }
    })
  };

  function handleCreateTrip(tripname) {
    const trip = {name: tripname}
    // console.log(tripname) 
    fetch("/api/trips", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(trip),
      })
      .then((r) => {
        if (r.ok) {
          r.json().then(newtrip => {
            console.log(newtrip)
            handleCreateUserTrip(newtrip.id)
            handleCreateParkDetails(tripname, newtrip.id, newtrip)
            // newtrip.parkdetails = new Array(parkDetails)
            // const updatedTrips = [...trips, newtrip]
            // setTrip(updatedTrips)
    
            console.log(trips)
            console.log("parkdetails",parkDetails)
            console.log("parkdetails",newtrip.parkdetails)
            success()
          });
        }
        else {
          r.json().then(err => setErrors([...errors, err.errors]));
        }
      });
}

  const success = () => message.success('New Trip Created!');


  function handleCreateUserTrip(trip_id) {
      fetch("/api/usertrips", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
              user_id: parseInt(user.id),
              trip_id: trip_id
          }),
      })
   .then(r => {
      if (r.ok) {
            r.json().then(data=>console.log(data))
            } else {
                r.json().then(err => setErrors([...errors, err.errors]))
            }
        })
  } 

  function handleCreateParkDetails(tripname, trip_id, newtrip) {
    let myPark = parks.find(park=>{
      return park.fullName === tripname
    })
    console.log(myPark)
    fetch("/api/parkdetails", {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify({
          fullname: myPark.fullName,
          description: myPark.description,
          states: myPark.states,
          contacts: myPark.contacts.phoneNumbers[0].phoneNumber,
          entrancefee: myPark.entranceFees[0].cost,
          directionsinfo: myPark.directionsInfo,
          directionsurl: myPark.directionsUrl,
          operatinghours: myPark.operatingHours[0].description,
          addresses: myPark.addresses[0].line1,
          images: myPark.images[0].url,
          weatherinfo: myPark.weatherInfo,
          trip_id: trip_id,
          user_id: user.id
    }),
    })
    .then((r) => {
        if (r.ok) {
        r.json().then(newParkDetails=>{
          
          // setTrip( prevTrips => {
            // const newTrips = [...prevTrips]
            // const index = newTrips.findIndex(r => r.id == newParkDetails.id)
          //   newTrips[0].parkdetails.push(newParkDetails)
          //   return newTrips
          // })
          // const udpatedParkDetails = [...parkDetails, newParkDetails]
          // setParkDetails(newParkDetails)
          newtrip.parkdetails = new Array(newParkDetails)
          const updatedTrips = [...trips, newtrip]
          setTrip(updatedTrips)
          console.log(typeof newParkDetails)
          console.log(updatedTrips)
          // setParkDetails
        });
        }
        else {
        r.json().then(err => setErrors([...errors, err.errors]));
        }
    });
  }
console.log(trips)
  useEffect(() => {
    // auto-login
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return (

    <div className="App">
      <Header handleSearch={handleSearch} onLogin={setUser}/>

        <Routes>
          <Route exact path = "*" element={<LandingPage handleSearch={handleSearch} searchResults={searchResults}/>}/>
          <Route path = "/parkcontainer" element={<ParkContainer parks={searchResults()}/>}/>
          <Route path = "/parkcontainer/:id" element={<ParkFullDetail handleCreateTrip={handleCreateTrip} parks={searchResults()}/>}/>
          <Route path = "/dashboard/*" element={<Dashboard parks={searchResults()} handleLogoutClick={handleLogoutClick} onLogin={setUser} user={user} trips={trips} setTrip={setTrip} parkDetails={parkDetails} />}/>
          <Route path = "/contactus" element={<ContactUs />}/>

        </Routes>

      
    </div>
  )

  return (

    <div className="App">
      <Header handleSearch={handleSearch} onLogin={setUser}/>
      <Routes>
          <Route exact path = "*" element={<LandingPage handleSearch={handleSearch} searchResults={searchResults}/>}/>
          <Route path = "/parkcontainer" element={<ParkContainer parks={searchResults()}/>}/>
          <Route path = "/parkcontainer/:id" element={<ParkFullDetail handleCreateTrip={handleCreateTrip} parks={searchResults()}/>}/>
          <Route path = "/dashboard/*" element={<Dashboard parks={searchResults()} handleLogoutClick={handleLogoutClick} onLogin={setUser} user={user} trips={trips} setTrip={setTrip} parkDetails={parkDetails} />}/>
          <Route path = "/contactus" element={<ContactUs />}/>

        </Routes>
    </div>

  )
}

export default App;
