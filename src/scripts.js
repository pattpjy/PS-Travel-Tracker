// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)

import { logInAuthPrompt , submitForm , logInAuth } from './controller'

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
    reqTripCostEst: document.querySelector('#reqEst'),
    logInPromp: document.querySelector('#logInPrompt'),
    showDashboard : document.querySelector('#dashBoard'),
    logInForm : document.querySelector('#logInForm'),
    logInBtn : document.querySelector('#authButton'),
    alertMsg: document.querySelector('#alertMsg')


}

//event listerner

// window.addEventListener('load', function(){
//     logInAuthPrompt(pageObj)

// })

// Login listener
pageObj.logInBtn.addEventListener('click', (e) => {
    e.preventDefault();
    logInAuth(pageObj)

})

// form eventLister
pageObj.tripReqForm.addEventListener('submit', (e) => {
    e.preventDefault();
    submitForm(pageObj);
    //refactor line 41 parameter to just pafeObj, and change sunmitForm(pom) 

})





