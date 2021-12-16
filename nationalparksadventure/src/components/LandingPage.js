import Search from './Search';
import ParkContainer from "./ParkContainer";
import {Routes, Route, useNavigate} from "react-router-dom"


function LandingPage({search, handleSearch, searchResults}) {

    return (
        <>
            <div id="landing">
                <p>Discover your next adventure</p>
                <Search search={search} handleSearch={handleSearch}/> 
            </div>
        </>
    )
}

export default LandingPage