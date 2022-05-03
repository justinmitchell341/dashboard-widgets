/************
Dynamic Data
************/
// define `theClockApp` stored in function to be ran

const theClockApp = () => {
  
// Get and store current date and time with `new Date()` object
const timeNow = new Date();
// Check-Check: See all `Date()` methods and properties
// console.log( timeNow );

// Get current hours
let gotHours = timeNow.getHours();
// Get current minutes
let gotMinutes = timeNow.getMinutes();
// Get current seconds
let gotSeconds = timeNow.getSeconds();

// Check-Check: Is the data correct? 
// console.log(gotHours, gotMinutes, gotSeconds);

/************
Format Data
************/
// Get AM or PM
const gotAmOrPM = gotHours >= 12 ? 'PM' : 'AM';
// Get 12 hour format
gotHours = gotHours % 12 || 12;
// Optionally, append zero to single digit hours
gotHours = gotHours < 10 ? `0${gotHours}` : gotHours;   
// Optionally, append zero to single digit minutes
gotMinutes = gotMinutes < 10 ? `0${gotMinutes}` : gotMinutes;
// Optionally, append zero to single digit seconds

/************
Get DOM Elements
************/
// Get Hours
const hours = document.querySelector(".hours");
// Get minutes
const minutes = document.querySelector(".minutes");
// Get seconds
// Get AM or PM
const amOrPM = document.querySelector('.amOrPM');

/************
Set DOM Elements
************/
// Set the hours
hours.innerText = gotHours;
// Set the minutes
minutes.innerText = gotMinutes;
// Set the seconds

// Set AM or PM
amOrPM.innerText = gotAmOrPM;
  
}

/************
Run App
************/
// Re-run `theClockApp` every 1 second (1000 ms)
setInterval(theClockApp, 1000);
 //Giphy URL query string
 const giphyUrl = `https://api.giphy.com/v1/gifs/random?tag=time&api_key=oBmJ7elmwNUixmTd5HtTPNVf2nSTlsNC&rating=g&limit=`
 // Get data from giphy url
 timeContainer = document.querySelector('.time')
 fetch(giphyUrl)
 .then (response => response.json())
 .then(data => {
   //Checking data
//    console.log(data)
   // Get data of data (this was annoying to figure out)
   const giphyGif = (data.data.images.original.url);
   // Checking gif
//    console.log(giphyGif)
   const template2 = `<img class="gif" src=${giphyGif}" alt="gif">`;
   timeContainer.insertAdjacentHTML("afterbegin", template2);
 })