//MVC = THIS IS MY COMTROLLER
import * as dayjs from "dayjs"
import TripRepo from './TripRepo'
import DestiRepo from './DestiRepo'
import travelerRepo from './TravelerRepo';
import travelers from './data/data-traveler'; // should be in controller?? also need to be api local

import { fetchAll , postNewTrip } from './apiCall'

let travelerData
let tripData
let destiData

const activeUser = 50


// makes an API call // this is an arr of dataset obj trips, destination,traveller 
fetchAll()
.then((data)=> {
   
    travelerData = new travelerRepo(data[0].travelers)
    destiData = new DestiRepo(data[2].destinations)
    tripData = new TripRepo(data[1].trips, destiData )
    console.log(tripData)
})







//function
// pom is parameter for pageObj in VIEW - so I can pass it around without having to make a lot of parameter

function onLoad (event,pom) {
    fetchAll()
.then((data)=> {
   
    travelerData = new travelerRepo(data[0].travelers)
    destiData = new DestiRepo(data[2].destinations)
    tripData = new TripRepo(data[1].trips, destiData )
    showUserInfo(activeUser,pom),
    viewPastTrip(activeUser,pom),
    viewUpcomingTrip(activeUser,pom)
    viewPending(activeUser,pom)
    viewYTDCost(activeUser,pom)
    showDestinationList(pom)
})
    
}

function showUserInfo (userID,pom) {
    const foundUser = travelerData.getTravelerByID(userID)
    pom.userName.innerText = `User Name: ${foundUser.name}`
    pom.userName.className = "user-info"
    pom.userName.label = "User Name"
 
}
function viewPastTrip (userID,pom) {
    const pastTrips = tripData.getPastTripsByUserID(userID)
    console.log(pastTrips)
    if(pastTrips.length === 0) {
        pom.pastTrip.innerText = "Past Trip : No past trip"
    } else {
        
        pastTrips.forEach((tripObj) => {
            const pTrip = document.createElement("p")
            pTrip.innerText = destiData.getDestinationById(tripObj.destinationID).destination + ", " + tripObj.date
            pTrip.label = 'Past trip information'
            pTrip.className = 'pastTrip'
            pom.pastTrip.appendChild(pTrip)
        })
    }
}

function viewUpcomingTrip (userID,pom) {
    const upComingTrips = tripData.getUpcomingTripsByUserID(userID)
    console.log(upComingTrips)
    if(upComingTrips.length === 0){
        pom.upComingTrip.innerText = "No upcoming trip"
    } else {
        upComingTrips.forEach((tripObj) => {
            const uTrip = document.createElement("p")
            uTrip.innerText = destiData.getDestinationById(tripObj.destinationID).destination + ", " + tripObj.date
            uTrip.label = 'Upcoming trip information'
            uTrip.className = 'Upcoming Trip'
            pom.upComingTrip.appendChild(uTrip)
        })
    }
}

function viewPending (userID,pom) {
    const pendingTrips = tripData.getPendingTripByUserID(userID)
    console.log(pendingTrips)
    if(pendingTrips.length === 0){
        pom.pendingTrip.innerText = "No pending trip"
    } else {
        pom.pendingTrip.innerText = pendingTrips
    }

}

function viewYTDCost(userID,pom){
    const ytdCost = tripData.calcTripCostCurrYear(userID)
    pom.ytdCost.innerText = `YTD Cost: ${ytdCost}`
}

function showDestinationList(pom){
    return destiData.getAll().forEach((el)=>{
        const addOption = document.createElement('option')
        addOption.value = el.destination
        addOption.innerText = el.destination
        pom.destinationList.appendChild(addOption)
    })
}
  
function submitForm (pom) {
    const formData = new FormData(pom.tripReqForm);
    const findDestinationID = destiData.getDestinationByName(formData.get('destination')).id
    
    const requestNewTrip = {
      id: tripData.createNewID(),
      userID: activeUser,
      destinationID: findDestinationID,
      travelers: formData.get('NO. of traveler'),
      date: dayjs(formData.get('myDate')).format('YYYY/MM/DD'),
      duration: formData.get('duration'),
      status: "pending",
      suggestedActivities: [ ]
    }
    
    postNewTrip(requestNewTrip).then(data => {
        tripData.createNewTrip(requestNewTrip)
        const estCost = tripData.calcEstCost(requestNewTrip.duration,requestNewTrip.travelers,requestNewTrip.destinationID)
        
       
        pom.reqTripCostEst.innerText = `Request Trip Eatimate Cost: ${estCost} `
        pom.reqTripCostEst.style.visibility = 'visible'

    })
    
}

export { onLoad , submitForm } ;