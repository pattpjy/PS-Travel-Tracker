//create a traveller class for a traveler info
import travelers from "./data/data-traveler"

class Traveler  {
    constructor (data) {
        this.id = data.id,
        this.name = data.name,
        this.travelerType = data.travelerType
    }
}


export default Traveler