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
    userName: document.querySelector('#userName'),
    pastTrip: document.querySelector('#pastTrip'),
    upComingTrip: document.querySelector('#upcomingTrip'),
    pendingTrip:document.querySelector('#pendingTrip'),
    ytdCost: document.querySelector('#ytdCost'),
    destinationList: document.querySelector('#listDestination'),
    tripReqForm: document.querySelector('#userTripRequest'),
    formDate: document.querySelector('#myDate'),
    formDuration: document.querySelector('#tripDuration'),
    formTraveler: document.querySelector('#numTraveler'),
    formDestination: document.querySelector('#listDestination'),
    reqTripCostEst: document.querySelector('#reqEst')
}

//event listerner

window.addEventListener('load', function(event){
    onLoad(event,pageObj)

})

// form eventLister
pageObj.tripReqForm.addEventListener('submit', (e) => {
    e.preventDefault();
    submitForm(pageObj);
    //refactor line 41 parameter to just pafeObj, and change sunmitForm(pom) 

})



