//import
//component
import ServiceList from "../../components/ServiceList/ServiceList"
import LocationList from "../../components/LocationList/LocationList"
//data
import { locationData, serviceData } from "../../data/data"

const Details = () => {
  return ( 
    <main>
      <h1 className="text-center">What We Do</h1>
      <ServiceList title="We Supply Fire Guards For:" service={serviceData} />
      <LocationList title="Where We Have Worked:" location={locationData} />
    </main>
  )
}

export default Details