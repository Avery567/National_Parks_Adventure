import ParkCard from "./ParkCard"


function ParkContainer ({parks}) {

  return (
    <div id="park-container">
      {parks.map(park => <ParkCard key={park.id} park={park}/>)}
    </div>
  )
}

export default ParkContainer