// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)

import  onload from './controller'

//MVC = THIS IS MY VIEW


// query selector //

// change to obj
const pageObj = {
    userName: document.querySelector('#user-name'),
    pastTrip: document.querySelector('#past-trip'),
    upComingTrip: document.querySelector('#upcoming-trip'),
    pendingTrip:document.querySelector('#pending-trip'),
    ytdCost: document.querySelector('#ytd-cost')
}

//event listerner

window.addEventListener('load', function(event){
    onload(event,pageObj)
})





