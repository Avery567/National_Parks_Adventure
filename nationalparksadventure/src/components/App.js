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

  useEffect(() => {
    fetch ('/api/parks')
    .then(resp => resp.json())
    .then (data => {
      // console.log(data)
      setParks(data.data)
    })
  } , []);

  
  const handleSearch = (userInput) => {
    setSearch(userInput)
    navigate("/parkcontainer")
  };

  const searchResults = () => {
    if (search.length > 0) {
      return parks.filter(park => park.fullName.toLowerCase().includes(search.toLowerCase())),
      parks.filter(park => park.description.toLowerCase().includes(search.toLowerCase()))
    } else {
      return parks
    }
  };
// console.log(parks)
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
            // handleCreateUserTrip(newtrip.id, newtrip)
            handleCreateParkDetails(tripname, newtrip)
            success()
            navigate("/dashboard")
          });
        }
        else {
          r.json().then(err => setErrors([...errors, err.errors]));
        }
      });
}

  const success = () => message.success('New Trip Created!');

  const navbarLinks = [
    { url: "/", title: "Home" },
    { url: "/dashboard", title: "My Dashboard" },
    { url: "/contactus", title: "Contact" },
  ];

  // function handleCreateUserTrip( newtrip,trip_id) {
  //     fetch("/api/usertrips", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //             user_id: parseInt(user.id),
  //             trip_id: trip_id
  //         }),
  //     })
  //  .then(r => {
  //     if (r.ok) {
  //           r.json().then(data=>{
  //             // newtrip.usertrips = new Array(data)
  //             console.log(data)
  //             // const updatedTripswithNewUser = [...trips, newtrip]
  //             // setTrip(updatedTripswithNewUser)
  //           })
  //           } else {
  //               r.json().then(err => setErrors([...errors, err.errors]))
  //           }
  //       })
  // } 

  function handleCreateParkDetails(tripname, newtrip) {
    let myPark = parks.find(park=>{
      return park.fullName === tripname
    })
    // console.log(myPark)
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
          trip_id: newtrip.id,
          user_id: user.id
    }),
    })
    .then((r) => {
        if (r.ok) {
        r.json().then(newParkDetails=>{
          newtrip.parkdetails = new Array(newParkDetails)
          const updatedTrips = [...trips, newtrip]
          setTrip(updatedTrips)
        });
        }
        else {
        r.json().then(err => setErrors([...errors, err.errors]));
        }
    });
  }


useEffect(()=>{
  fetch('/api/trips').then(r=>r.json()).then(setTrip)
},[])

// console.log(parks)

useEffect(() => {
  // auto-login
  fetch("/api/me").then((r) => {
    if (r.ok) {
      r.json().then((user) => setUser(user));
    }
  });
}, []);
// console.log(user)

  if (!user) return (

    <div className="App">
      <Header navbarLinks={navbarLinks} handleSearch={handleSearch} onLogin={setUser}/>

        <Routes>
          <Route exact path = "*" element={<LandingPage handleSearch={handleSearch} searchResults={searchResults}/>}/>
          <Route path = "/parkcontainer" element={<ParkContainer user={user}  handleCreateTrip={handleCreateTrip} parks={searchResults()}/>}/>
          <Route path = "/parkcontainer/:id" element={<ParkFullDetail handleCreateTrip={handleCreateTrip} user={user} parks={searchResults()}/>}/>
          <Route path = "/dashboard/*" element={<Dashboard handleSearch={handleSearch} parks={searchResults()} handleLogoutClick={handleLogoutClick} onLogin={setUser} user={user} trips={trips} setTrip={setTrip} parkDetails={parkDetails} />}/>
          <Route path = "/contactus" element={<ContactUs />}/>
  
        </Routes>

      
    </div>
  )

  return (

    <div className="App">
      <Header navbarLinks={navbarLinks} handleSearch={handleSearch} onLogin={setUser}/>
      <Routes>
          <Route exact path = "*" element={<LandingPage handleSearch={handleSearch} searchResults={searchResults}/>}/>
          <Route path = "/parkcontainer" element={<ParkContainer user={user} handleCreateTrip={handleCreateTrip} parks={searchResults()}/>}/>
          <Route path = "/parkcontainer/:id" element={<ParkFullDetail  handleCreateTrip={handleCreateTrip} user={user} parks={searchResults()}/>}/>
          <Route path = "/dashboard/*" element={<Dashboard handleSearch={handleSearch} parks={searchResults()} handleLogoutClick={handleLogoutClick} onLogin={setUser} user={user} trips={trips} setTrip={setTrip} parkDetails={parkDetails} />}/>
          <Route path = "/contactus" element={<ContactUs />}/>

        </Routes>
       
    </div>

  )
}

export default App;
