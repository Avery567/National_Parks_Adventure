import ParkCard from "./ParkCard"
import '../parkcontainer.css'
import parkcontainer from '../asset/parkcontainer.jpg';
import ReactPaginate from 'react-paginate';

function ParkContainer ({parks}) {

  return (
    <>
        <img src={parkcontainer} alt="parkcontainer" className="parkcontainer_image" />  
        <main>
          <div class="cards">
            {parks.map(park => <ParkCard key={park.id} park={park}/>)}
          </div>
        </main>
    </>
  )
}

export default ParkContainer