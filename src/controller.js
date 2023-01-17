//MVC = THIS IS MY COMTROLLER
import * as dayjs from "dayjs"
import TripRepo from './TripRepo'
import DestiRepo from './DestiRepo'
import travelerRepo from './TravelerRepo';
import travelers from './data/data-traveler'; // should be in controller?? also need to be api local

import { fetchAll , postNewTrip, fetchUser } from './apiCall'

let travelerData
let tripData
let destiData

let activeUser = 50


// makes an API call // this is an arr of dataset obj trips, destination,traveller 



//function
// pom is parameter for pageObj in VIEW - so I can pass it around without having to make a lot of parameter

function logInAuthPrompt(pom) {
    
    pom.logInPromp.visibility = 'visible'
    logInAuth(pom)
}
function logInAuth (pom){
    // if userID input value match the data doesn throw error, and password === 'password"
    // reset visibility, pass user ID to active user
    // fired page render function
    const formData = new FormData(pom.logInForm)
    if(formData.get('password') !== 'password'){
        return pom.alertMsg.innerText = "PASSWORD DO NOT MATCH"
         
    } else {
    return fetchUser(formData.get('UserID').split('traveler')[1])
        .then((data) =>{
            activeUser = data.id
            pom.logInPromp.style.visibility = 'hidden'
            pom.showDashboard.style.visibility = 'visible'
            pageRender(pom)
        })
        .catch((error) => {
            pom.alertMsg.innerText = 'TravelerID NOT FOUND'
            console.log(error.message)
        })
    }
}


function pageRender (pom) {
fetchAll()
.then((data)=> {
    travelerData = new travelerRepo(data[0].travelers)
    destiData = new DestiRepo(data[2].destinations)
    tripData = new TripRepo(data[1].trips, destiData )
    updateDashboard (pom)
    }) 
}

function updateDashboard (pom) {
    showUserInfo(activeUser,pom),
    viewPastTrip(activeUser,pom),
    viewUpcomingTrip(activeUser,pom)
    viewPending(activeUser,pom)
    viewYTDCost(activeUser,pom)
    showDestinationList(pom)
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
        pom.pastTrip.innerText = 'Past trip'
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
        pom.upComingTrip.innerText = 'Upcoming Trip'
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
        pom.pendingTrip.innerText = 'Pending Trip'
        pendingTrips.forEach((tripObj) => {
            const uTrip = document.createElement("p")
            uTrip.innerText = destiData.getDestinationById(tripObj.destinationID).destination + ", " + tripObj.date
            uTrip.label = 'Upcoming trip information'
            uTrip.className = 'Upcoming Trip'
            pom.pendingTrip.appendChild(uTrip)
        })
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

        updateDashboard (pom)

    })
    
}

export { logInAuthPrompt , submitForm ,logInAuth } ;