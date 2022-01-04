import Search from './Search';
import ParkContainer from "./ParkContainer";
import {Routes, Route, useNavigate} from "react-router-dom"
import '../App.css'
import landingiamge from '../asset/landing.jpg';


function LandingPage({search, handleSearch, searchResults}) {

    return (
        <>
            <div className="landing">
                <img src={landingiamge} alt="landing" className="landing_image"/>
                <h1 className="landing_title">Discover your next adventure</h1>
                <h1 className="landing_searchbar"><Search search={search} handleSearch={handleSearch}/> </h1>
            </div>
        </>
    )
}

export default LandingPage