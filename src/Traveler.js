//create a traveller class for a traveler info
import travelers from "./data/data-traveler"

class Traveler  {
    constructor (data) {
        this.id = data.id,
        this.name = data.name,
        this.travelerType = data.travelerType
    }
    getTravelerByID(travelerId) {
        const travelerFound = travelers.find((obj)=> {
            return obj.id === travelerId
        })
        
        return travelerFound
    }
}


export default Traveler