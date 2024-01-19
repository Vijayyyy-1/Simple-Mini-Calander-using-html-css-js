console.log("Hi user!");

let date = document.querySelector("#date");
let day = document.querySelector("#day");
let month = document.querySelector("#month");
let year = document.querySelector("#year");

let todayDate = new Date();

let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
    "Saturday", "Sunday"];
let yearName = ["January", "Feburary", "March", "April", "May", "June", "July", "August",
    "September", "October", "November", "December"];
date.innerHTML = (todayDate.getDate() < 10 ? "0" : "") + todayDate.getDate();
day.innerHTML = weekDays[todayDate.getDay()];
month.innerHTML = yearName[todayDate.getMonth()];
year.innerHTML = todayDate.getFullYear();
