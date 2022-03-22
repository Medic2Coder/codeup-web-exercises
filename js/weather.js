"use strict";

//TODO: Make this the primary and take off inline js
// mapboxgl.accessToken = 'pk.eyJ1IjoibWFya2FuZGVyc29uMCIsImEiOiJjbDEwbGQ5OW0wdjcwM2pzMWNkcHVvYnM5In0.yCiJw13Nfp6AnBLYSjiuyw';
// const map = new mapboxgl.Map({
//     container: 'map', // container ID
//     style: 'mapbox://styles/markanderson0/cl11qnq87000c14s2oru88bx8', // style URL
//     center: [-98.4916, 29.4252], // starting position [lng, lat]
//     zoom: 8 // starting zoom
// });
//
// var marker = new mapboxgl.Marker()
//     .setLngLat([-98.4916, 29.4260])
//     .addTo(map);
//
// $.get("https://api.openweathermap.org/data/2.5/weather", {
//     APPID: OPEN_WEATHER_APPID,
//     q:     "San Antonio, US"
// });
//
// mapboxgl.accessToken = 'pk.eyJ1IjoibWFya2FuZGVyc29uMCIsImEiOiJjbDEwbGQ5OW0wdjcwM2pzMWNkcHVvYnM5In0.yCiJw13Nfp6AnBLYSjiuyw';
// const map = new mapboxgl.Map({
//     container: 'map', // container ID
//     style: 'mapbox://styles/markanderson0/cl11qnq87000c14s2oru88bx8', // style URL
//     center: [-98.4916, 29.4252], // starting position [lng, lat]
//     zoom: 11 // starting zoom
// });
// //alamo marker
// var marker = new mapboxgl.Marker()
//     .setLngLat([-98.4916, 29.4260])
//     .addTo(map);
//
// //popup over alamo
// var alamoPopup = new mapboxgl.Popup()
//     .setHTML("<p>Remember The Alamo!</p>")
//
// marker.setPopup(alamoPopup)
// //popup over codeup
// // var popup = new mapboxgl.Popup()
// //     .setLngLat([-98.489615, 29.426827])
// //     .setHTML("<p>Codeup Rocks!</p>")
// //     .addTo(map)
//
// fetch("http://api.openweathermap.org/data/2.5/weather?q=San Antonio&mode=json&units=imperial" + OWM_KEY)
//     .then(response => response.json())
//     // .then(data => console.log(data))
//     .then(data => {
//         // console.log(data.daily[i].temp.day);
//         console.log(data.daily);
//
//         let
//             html = "";
//         html += '<ul>'
//         for (let i = 0; i < 5; i++) {
//             let
//                 dailyTemp = data.daily[i].temp.day
//             html += '<li>' + dailyTemp + '<li>'
//         }
//         $('#weather').html(html);
//     });
// mapboxgl.accessToken = YOUR_API_TOKEN_HERE;
// var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v9',
//     zoom: 10,
//     center: [-98.4916, 29.4252]
// });


mapboxgl.accessToken = 'pk.eyJ1IjoibWFya2FuZGVyc29uMCIsImEiOiJjbDEwbGQ5OW0wdjcwM2pzMWNkcHVvYnM5In0.yCiJw13Nfp6AnBLYSjiuyw';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/markanderson0/cl11qnq87000c14s2oru88bx8', // style URL
    center: [-98.4916, 29.4252], // starting position [lng, lat]
    zoom: 11 // starting zoom
});
//alamo marker
var marker = new mapboxgl.Marker()
    .setLngLat([-98.4916, 29.4260])
    .addTo(map);

//popup over alamo
var alamoPopup = new mapboxgl.Popup()
    .setHTML("<p>Remember The Alamo!</p>")

marker.setPopup(alamoPopup)
//popup over codeup
// var popup = new mapboxgl.Popup()
//     .setLngLat([-98.489615, 29.426827])
//     .setHTML("<p>Codeup Rocks!</p>")
//     .addTo(map)

fetch("http://api.openweathermap.org/data/2.5/weather?q=San Antonio&mode=json&units=imperial" + OWM_KEY)
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => {
        // console.log(data.daily[i].temp.day);
        console.log(data.daily);

        let
            html = "";
        html += '<ul>'
        for (let i = 0; i < 5; i++) {
            let
                dailyTemp = data.daily[i].temp.day
            html += '<li>' + dailyTemp + '<li>'
        }
        $('#weather').html(html);
    });

function createWeather() {
    var html = "";

    data.daily.forEach(function (day, index) {
        let actual_datetime = new Date(day.dt*1000);
        let modified_datetime = actual_datetime.getDate() + "-" + months[actual_datetime.getMonth()] + "-" + actual_datetime.getFullYear();

        html += ('<section>' +
            '<p class="list'> + modified_datetime + '</p>' +
            '<p class="list">' + 'Humidity: ' + day.humidity + '</p>' +
            '<p class="list">' + 'Description: ' + day.weather[0].description + '</p>' +
            '<p class="list">' + day.temp.min + '°F' + ' / ' + day.temp.max + '°F' + '</p>'  +
            '</section>');
    });
    $("#card-text").html(html);

}

function climate (lat, lon) {
    $.get('https://api.openweathermap.org/data/2.5/onecall', {
        appid:  OWM_KEY,
        lat: lat,
        lon: lon,
        units: "imperial",
        exclude: "minute, hourly"

    }).done(function (error) {
        createWeather(data);

    }).fail(function (error) {
        console.log(error);
    });

    }