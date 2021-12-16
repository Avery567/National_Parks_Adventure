import React, { useEffect, useState } from "react";
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";
import Header from "./Header";

function App() {
  const [user, setUser] = useState(null);

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
      <Header />  
      <LandingPage onLogin={setUser} />
      
    </div>
  )
  return (

    <div className="App">
      <Header />  
      <Dashboard setUser={setUser} user={user} />
    </div>

  )
}

export default App;
