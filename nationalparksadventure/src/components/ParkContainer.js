import ParkCard from "./ParkCard"
import '../parkcontainer.css'
import parkcontainer from '../asset/parkcontainer.jpg';
import ReactPaginate from 'react-paginate';

function ParkContainer ({parks}) {

  return (
    <>
     <ReactPaginate
        previousLabel = {'Previous'}
     
     />
        <img src={parkcontainer} alt="parkcontainer" className="parkcontainer_image" />  
        <div className="main">
          <div className="cards">
            {parks.map(park => <ParkCard key={park.id} park={park}/>)}
          </div>
        </div>
    </>
  )
}

export default ParkContainer