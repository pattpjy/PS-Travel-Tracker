
import TripRepo from './TripRepo'
import DestiRepo from './DestiRepo'
import travelerRepo from './TravelerRepo';
import travelers from './data/data-traveler'; // should be in controller?? also need to be api local
// use local api
let travelerData


//function
// pom is parameter for pageObj in VIEW
function onLoad (event,pom) {
    viewPastTrip(event)
    showUserInfo(1,pom)
}
function showUserInfo (userID,pom) {
    travelerData = new travelerRepo(travelers)
    const foundUser = travelerData.getTravelerByID(userID)
    pom.userName.innerText = `User Name: ${foundUser.name}`
    pom.userName.className = "user-info"
    pom.userName.label = "User Name"
 
}
function viewPastTrip (event) {

}
function viewUpcomingTrip (event) {

}
function viewPending (event) {

}
export default onLoad