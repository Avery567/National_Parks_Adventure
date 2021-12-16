import { useState } from "react";

function Search ({handleSearch}) {

  const [form, setForm] = useState("")

  const handleForm = (e) => setForm(e.target.value)

  function handleSubmit(e) {
    e.preventDefault();
    // console.log("submitted");
    handleSearch(form)
  }

    return (
      <div>
        <form id="search-form" onSubmit={handleSubmit}>
          <input
            id="search"
            type="text"
            placeholder="Search national parks, cities, etc"
            value={form}
            onChange= {handleForm}
          >
          </input>
        </form>
      </div>
    )
  }
  
  export default Search;