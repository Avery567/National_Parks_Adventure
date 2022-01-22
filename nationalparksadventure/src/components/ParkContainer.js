import ParkCard from "./ParkCard"
import '../parkcontainer.css'
import parkcontainer from '../asset/parkcontainer.jpg';


function ParkContainer ({parks, handleCreateTrip,user}) {

  return (
    <>
        <img src={parkcontainer} alt="parkcontainer" className="parkcontainer_image" />  
        <div className="main">
          <div className="cards">
            {parks.map(park => <ParkCard key={park.id} park={park} user={user} handleCreateTrip={handleCreateTrip}/>)}
          </div>
        </div>
    </>
  )
}

export default ParkContainer