// create a repository for trips related info
//Trip repo will have all information related to all trips
import Trip from './Trip'

class TripRepo {
    constructor (data) {
        this.tripData = data.map(el => new Trip(el))
    }

//All of my trips (past, upcoming and pending)
//Total amount I have spent on trips this year. This should be calculated from the trips data and include a travel agent’s 10% fee

 getPastTripsByUserID(userId) {
    //loop thru this.tripData 
        //filter by userId and date < current date
        // return trips object 
    console.log('hello')
}

getUpcomingTripsByUserID(userId) {
    //loop thru this.tripData 
        //filter by userId and date >= current date
        //return trips object 
}

getPendingTripByUserID(userId) {
    //loop thru this.tripData 
        //filter by userId and status === pending
        //return trips object 
}

calcTripCostCurrYear(userId) {
    //loop thru this.tripData
        //filter by userId
    //for each trips and  loop destination data
        //if destinationID match
            // estimatedLodgingCostPerDay * trips.duration
            //estimatedFlightCostPerPerson * trips.travelers
        // return a single number
}


}




export default TripRepo
