// API key. Replace with your API key
const APIKEY = 'f2f85762267ef18d0df71e18ec9f3737';

const GIPHYKEY = 'oBmJ7elmwNUixmTd5HtTPNVf2nSTlsNC';
// City
const city = 'Spokane';
// Units for Farenheit
const units = 'imperial';


// URL query string
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=${units}`;



// Using fetch to get data
fetch(url)
.then( response => response.json() )
.then( data => {

  // Check-check: Is data good? 
  // console.log(data);
  
  // Get Container for Weather   
  const weatherContainer = document.querySelector('.weather');
  // Get Weather type
  const weatherType = (data.weather[0].main);
 // what is the weather type?
  // console.log(weatherType);
  //Giphy URL query string
  const giphyUrl = `https://api.giphy.com/v1/gifs/random?tag=${weatherType}&api_key=oBmJ7elmwNUixmTd5HtTPNVf2nSTlsNC&rating=g&limit=`
  // Get data from giphy url
  fetch(giphyUrl)
  .then (response => response.json())
  .then(data => {
    //Checking data
    // console.log(data)
    // Get data of data (this was annoying to figure out)
    const giphyGif = (data.data.images.original.url);
    // Checking gif
    // console.log(giphyGif)
    const template2 = `<img class="gif" src=${giphyGif}" alt="gif">`;
    weatherContainer.insertAdjacentHTML("afterbegin", template2);
  })
  // console.log(giphyUrl);
  // Template to output
  const template = `
  <div class="weatherData">
    <h1>Weather</h1>
    <data value="${data.name}" class="city">${data.name}</data>
    <data value="${data.main.temp}" class="temp"> ${data.main.temp}&#8457;</data>
    <data value="${data.main.feels_like}" class="tempFeel">Feels like: ${data.main.feels_like}&#8457;</data>
    <img class="icon" src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Placeholder">
  </div>
    `;
  
  // Insert dynamic template to container
  weatherContainer.insertAdjacentHTML("afterbegin", template);
  
});
