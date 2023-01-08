// create a destination class for a desination info

class Destination {
    constructor(data){
        this.id = data.id,
        this.destination = data.destination,
        this.estLodgingCostPerDay = data.estimatedLodgingCostPerDay,
        this.estFlighCostPerPerson = data.estimatedFlightCostPerPerson,
        this.image = data.image,
        this.alt = data.alt
    }
}

export default Destination