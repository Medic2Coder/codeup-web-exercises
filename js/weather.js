"use strict";

//TODO: Make this the primary and take off inline js
// mapboxgl.accessToken = 'pk.eyJ1IjoibWFya2FuZGVyc29uMCIsImEiOiJjbDEwbGQ5OW0wdjcwM2pzMWNkcHVvYnM5In0.yCiJw13Nfp6AnBLYSjiuyw';
// const map = new mapboxgl.Map({
//     container: 'map', // container ID
//     style: 'mapbox://styles/markanderson0/cl11qnq87000c14s2oru88bx8', // style URL
//     center: [-98.4916, 29.4252], // starting position [lng, lat]
//     zoom: 8 // starting zoom
// });

var marker = new mapboxgl.Marker()
    .setLngLat([-98.4916, 29.4260])
    .addTo(map);

$.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: OPEN_WEATHER_APPID,
    q:     "San Antonio, US"
});


// mapboxgl.accessToken = YOUR_API_TOKEN_HERE;
// var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v9',
//     zoom: 10,
//     center: [-98.4916, 29.4252]
// });