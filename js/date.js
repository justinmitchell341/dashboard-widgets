/************
Static Data
************/
const allTheMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const allTheDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

/************
Dynamic Data
************/
// Get and store current date and time with `new Date()` object
const dateNow = new Date();
// Check-Check: See all `Date()` methods and properties


const gotMonth = dateNow.getMonth();
// Get current day of the month
let gotDayOfMonth = dateNow.getDate();
// Get current year
const gotYear = dateNow.getFullYear();
// Get current day of the week
const gotDayOfWeek = dateNow.getDay();

// Check-Check: Is the data correct? 


/************
Get DOM Elements
************/
// Get the month
const month = document.querySelector(".month");
// Get day of the month
const dayOfMonth = document.querySelector(".dayOfMonth");
// Get year
const year = document.querySelector('.year');
// Get Day of Week
const dayOfWeek = document.querySelector('.dayOfWeek');


/************
Set DOM Elements
************/
// Set the month
month.innerText = allTheMonths[gotMonth];
// Set day of the month
dayOfMonth.innerText = gotDayOfMonth;
// Set the year
year.innerText = gotYear;
// Set the day of the week
dayOfWeek.innerText = allTheDays[gotDayOfWeek];

 //Giphy URL query string
 const dateUrl = `https://api.giphy.com/v1/gifs/random?tag=${allTheDays[gotDayOfWeek]}"&api_key=oBmJ7elmwNUixmTd5HtTPNVf2nSTlsNC&rating=g&limit=`
 console.log(dateUrl);
 dateContainer = document.querySelector('.date')
 fetch(dateUrl)
 .then (response => response.json())
 .then(data => {
   //Checking data
//    console.log(data)
   // Get data of data (this was annoying to figure out)
   const giphyGif = (data.data.images.original.url);
   // Checking gif
//    console.log(giphyGif)
   const template2 = `<img class="gif" src=${giphyGif}" alt="gif">`;
   dateContainer.insertAdjacentHTML("afterbegin", template2);
 })
