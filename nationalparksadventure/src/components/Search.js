import { useState } from "react";
import '../App.css'
import search from '../asset/search.png';

function Search ({handleSearch}) {

  const [form, setForm] = useState("")

  const handleForm = (e) => setForm(e.target.value)

  function handleSubmit(e) {
    e.preventDefault();
    // console.log("submitted");
    handleSearch(form)
  }

    return (
      <div className="wrap">
        <form id="search-form" className="search" onSubmit={handleSubmit}>
          <input
            id="search"
            className ="searchTerm"
            type="text"
            placeholder="search national parks, cities, etc"
            value={form}
            onChange= {handleForm}
          >
          </input>
          <button type="submit" className="searchButton" onSubmit={handleSubmit}><img src={search}/></button>
        </form>
      </div>
    )
  }
  
  export default Search;