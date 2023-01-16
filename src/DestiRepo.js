// this is where to instanciate new Destination
// this repo will act on aggregate destination

// method to find destination by ID
import Destination from './Destinations'


class DestiRepo {
    constructor (data) {
        this.destiData = data.map(obj => new Destination(obj))
    }
    // method to find destination by ID
    getDestinationById(destId) {
        const destiFound = this.destiData.find((obj)=> {
            return obj.id === destId
        })
        
        return destiFound
    }
    getAll() {
        return this.destiData
    }
}

export default DestiRepo
