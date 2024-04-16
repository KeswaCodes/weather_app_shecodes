// Feature 1 - displays the current time
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

let todaysDate = document.querySelector("#todays-date");
let dateToday = new Date();

let day = daysOfWeek[dateToday.getDay()];
let minutes = dateToday.getMinutes();
let hours = dateToday.getHours();
let currentTime = `${day} ${dateToday.getDate()}, ${dateToday.getHours()}:${dateToday.getMinutes()}`;

if (dateToday.getMinutes() < 10) {
  currentTime = `${day} ${dateToday.getDate()}, ${dateToday.getHours()}:0${dateToday.getMinutes()}`;
} else {
  currentTime = `${day} ${dateToday.getDate()}, ${dateToday.getHours()}:${dateToday.getMinutes()}`;
}
todaysDate.innerHTML = currentTime;

// Feature 2 - User input(user's city) displayed on page
function displayCity(event) {
  event.preventDefault();

  let search = document.querySelector("#search");
  let cty = document.querySelector("#cty");
  if (search.value.trim() === "") {
    cty.innerHTML = "Johannesburg, Gauteng";
  } else {
    cty.innerHTML = search.value;
  }
}

let button = document.querySelector("button");
button.addEventListener("click", displayCity);

// Feature 3 - converts current temperature to Farenheit/ Celsius
function convertFaren() {
  tempCurrent.innerHTML = "50°";
}
function convertCelsi() {
  tempCurrent.innerHTML = "10°";
}
let tempCurrent = document.querySelector("#tempCurrent");
let faren = document.querySelector("#faren");
let celsi = document.querySelector("#celsi");

faren.addEventListener("click", convertFaren);
celsi.addEventListener("click", convertCelsi);
