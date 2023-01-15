
import Traveler from './Traveler'



class travelerRepo {
    constructor (data) {
        this.travelerData = data.map(obj => new Traveler(obj))
    }
    getTravelerByID(travelerId) {
        const travelerFound = this.travelerData.find((obj)=> {
            return obj.id === travelerId
        })
        
        return travelerFound
    }
    
}

export default travelerRepo