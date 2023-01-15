// create a repository for trips related info
//Trip repo will have all information related to all trips
import * as dayjs from "dayjs"
import Trip from './Trip'
import DestiRepo from './DestiRepo'
import destinations from './data/data-destination'


class TripRepo {
    constructor (trips) {
        this.tripData = trips.map(el => new Trip(el))
    }

//All of my trips (past, upcoming and pending)
//Total amount I have spent on trips this year. This should be calculated from the trips data and include a travel agent’s 10% fee
//Do I need a getTripbyUserID() and use as a helperfunction? 


    getPastTripsByUserID(userId) {
    const pastTrip = this.tripData.filter((el) =>{
        return el.userID === userId && dayjs(el.date).isBefore(dayjs()) === true
        //el.date (check with dayJS) is true
    })
    return pastTrip
    //loop thru this.tripData 
        //filter by userId and date < current date
        // return trips object 
}

    getUpcomingTripsByUserID(userId) {
    const upcomingTrips = this.tripData.filter((el) =>{
        return el.userID === userId && dayjs(el.date).isBefore(dayjs()) === false 
        //el.date (check with dayJS) is flase
    })
   
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
    })
    return pendingTrips
}

    calcTripCostCurrYear(userId) { // could use a reduce
        const tripDesti = new DestiRepo(destinations)
        const upToNowTrips = this.getPastTripsByUserID(userId)
        let sum = 0
        const calc = upToNowTrips.forEach((trip) => {
           
        let a = (trip.travelers * tripDesti.getDestinationById(trip.destinationID).estimatedFlightCostPerPerson)
        let b = (trip.duration * tripDesti.getDestinationById(trip.destinationID).estimatedLodgingCostPerDay)
       
        return sum+(a+b)
        })
  
    return sum
    }
    //loop thru this.tripData
        //filter by userId
    //for each trips and  loop destination data
        //if destinationID match
            // estimatedLodgingCostPerDay * trips.duration
            //estimatedFlightCostPerPerson * trips.travelers
        // return a single number

addAgentFee(amount) {
    return amount* .10
    // add $fee = a trip cost * .10
}
calcTotalCostCurrYear(userId) {
    const tripCost = this.calcTripCostCurrYear(userId)
    const totalCost = tripCost + this.addAgentFee(tripCost)
    return totalCost
}

}




export default TripRepo
