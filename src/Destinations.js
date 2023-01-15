// create a destination class for a desination info

class Destination {
    constructor(data){
        this.id = data.id,
        this.destination = data.destination,
        this.estimatedLodgingCostPerDay = data.estimatedLodgingCostPerDay,
        this.estimatedFlightCostPerPerson = data.estimatedFlightCostPerPerson,
        this.image = data.image,
        this.alt = data.alt || `Image of ${this.destination}`
    }
}

export default Destination