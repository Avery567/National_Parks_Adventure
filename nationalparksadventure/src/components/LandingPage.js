import Search from './Search';
import ParkContainer from "./ParkContainer";
import {Routes, Route, useNavigate} from "react-router-dom"
import '../App.css'
import Slider from "./Slider";
import slider1 from '../asset/slider1.jpg';
import slider2 from '../asset/slider2.jpg';
import landingiamge from '../asset/landing.jpg';


function LandingPage({search, handleSearch, searchResults}) {

    return (
        <>
            <div className="landing">
                <img src={landingiamge} alt="landing" className="landing_image"/>
                <h1 className="landing_title">Discover your next adventure</h1>
                <h1><Search search={search} handleSearch={handleSearch}/> </h1>
            </div>
            <Slider
                imageSrc={slider1}
                title={"Plan your best trip ever"}
                subtitle={
                "Build, organize, and map your itineraries in a free travel app designed for vacations & road trips"
                }
             />
            <Slider
                imageSrc={slider2}
                title={"Memories for a lifetime."}
                subtitle={"Your dream vacation is only a few clicks away."}
                flipped={true}
             />
        </>
    )
}

export default LandingPage