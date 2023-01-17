// create a repository for trips related info
//Trip repo will have all information related to all trips
import * as dayjs from "dayjs"
import Trip from './Trip'
import DestiRepo from './DestiRepo'
import destinations from './data/data-destination'


class TripRepo {
    constructor (trips,destiRepo) {
        this.tripData = trips.map(el => new Trip(el)) // array of trip object
        this.destiRepo = destiRepo
        this.agentsFeePct = .10
    }

//All of my trips (past, upcoming and pending)
//Total amount I have spent on trips this year. This should be calculated from the trips data and include a travel agent’s 10% fee
//Do I need a getTripbyUserID() and use as a helperfunction? 


    getPastTripsByUserID(userId) {
    const pastTrip = this.tripData.filter((el) =>{
        return el.userID === userId && dayjs(el.date).isBefore(dayjs()) === true
        //el.date (check with dayJS) is true
    }, [])
    // filter last parameter after call back set to [] instead of undefinded
    return pastTrip
    //loop thru this.tripData 
        //filter by userId and date < current date
        // return trips object 
}

    getUpcomingTripsByUserID(userId) {
    const upcomingTrips = this.tripData.filter((el) =>{
        return el.userID === userId && dayjs(el.date).isBefore(dayjs()) === false 
        //el.date (check with dayJS) is flase
    }, [])
   
    return upcomingTrips
    //loop thru this.tripData 
        //filter by userId and date >= current date
        //return trips object 
}

    getPendingTripByUserID(userId) {
    //loop thru this.tripData 
        //filter by userId and status === pending
        //return trips object  
    const pendingTrips = this.tripData.filter((el) => {
        return el.userID === userId && dayjs(el.date).isBefore(dayjs()) === false && el.status === "pending"
    }, [])
    return pendingTrips
}

    calcTripCostCurrYear(userId) { // could use a reduce
        
        const upToNowTrips = this.getPastTripsByUserID(userId)
        let sum = 0
        const calc = upToNowTrips.forEach((trip) => {

        let a = (trip.travelers * this.destiRepo.getDestinationById(trip.destinationID).estimatedFlightCostPerPerson)
        let b = (trip.duration * this.destiRepo.getDestinationById(trip.destinationID).estimatedLodgingCostPerDay)
       
        return sum += (a+b)
        })
        
  
    return sum * (1+this.agentsFeePct)
    }
    //loop thru this.tripData
        //filter by userId
    //for each trips and   loop destination data
        //if destinationID match
            // estimatedLodgingCostPerDay * trips.duration
            //estimatedFlightCostPerPerson * trips.travelers
        // return a single number
// method for finding the last in the array
    createNewID () {
        console.log(this.tripData.sort((a,b) => b.id - a.id)[0].id + 1)
        return this.tripData.sort((a,b) => b.id - a.id)[0].id + 1
        
    }
//method to create newTrip

    createNewTrip (input) {
        const newTrip = new Trip (input)
        this.tripData.push(newTrip)
    }
// method to let user calc a trip cost 
    calcEstCost (durationInput, numTravelerInput, destinationInput) {
        const durationCost = durationInput * this.destiRepo.getDestinationById(destinationInput).estimatedLodgingCostPerDay
        const travelersCost = numTravelerInput * this.destiRepo.getDestinationById(destinationInput).estimatedFlightCostPerPerson
        return (( durationCost + travelersCost ) * (1 + this.agentsFeePct)).toFixed()*1
    }

}




export default TripRepo
