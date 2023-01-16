// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)

import { onLoad , submitForm } from './controller'

//MVC = THIS IS MY VIEW


// query selector //

// change to obj
const pageObj = {
    userName: document.querySelector('#user-name'),
    pastTrip: document.querySelector('#past-trip'),
    upComingTrip: document.querySelector('#upcoming-trip'),
    pendingTrip:document.querySelector('#pending-trip'),
    ytdCost: document.querySelector('#ytdCost'),
    destinationList: document.querySelector('#listDestination'),
    tripReqForm: document.querySelector('#userTripRequest'),
    formDate: document.querySelector('#myDate'),
    formDuration: document.querySelector('#tripDuration'),
    formTraveler: document.querySelector('#numTraveler'),
    formDestination: document.querySelector('#listDestination'),
}

//event listerner

window.addEventListener('load', function(event){
    onLoad(event,pageObj)

})

// form eventLister
pageObj.tripReqForm.addEventListener('submit', (e) => {
    e.preventDefault();
    submitForm(pageObj.tripReqForm);
})



