import React, { useEffect, useState } from "react";
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
  const [search, setSearch] = useState('')
  const [parks, setParks] = useState([])
  const navigate = useNavigate()

  const handleSearch = (userInput) => {
    setSearch(userInput)
    navigate("/parkcontainer")
  }

  useEffect(() => {
    fetch ('https://developer.nps.gov/api/v1/parks?limit=495&api_key=qeE5JzYsOC3owspHxF6feYL8A2AOfa9WsIq78pUn')
    .then(resp => resp.json())
    .then (data => setParks(data.data))
  } , [])
  console.log(parks)
  const searchResults = () => {
    if (search.length > 0) {
      return parks.filter(park => park.fullName.toLowerCase().includes(search.toLowerCase())),
      parks.filter(park => park.description.toLowerCase().includes(search.toLowerCase()))
    } else {
      return parks
    }
  }

  function handleLogoutClick() {
    fetch("/api/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
        setUser(null)
        navigate("/")
        }
    })
  }

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
          <Route path = "/parkcontainer/:id" element={<ParkFullDetail parks={searchResults()}/>}/>
          <Route path = "/dashboard" element={<Dashboard handleLogoutClick={handleLogoutClick} onLogin={setUser} user={user} />}/>
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
          <Route path = "/parkcontainer/:id" element={<ParkFullDetail parks={searchResults()}/>}/>
          <Route path = "/dashboard" element={<Dashboard handleLogoutClick={handleLogoutClick} onLogin={setUser} user={user} />}/>
          <Route path = "/contactus" element={<ContactUs />}/>

        </Routes>
    </div>

  )
}

export default App;
