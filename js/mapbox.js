//Walkthorugh:
mapboxg1.accessToken = MAPBOX_API_KEU;
let map;
let geocoder;

init();
//command b takes you to where the function is defined
let coolLocation =   [-96.82015, 32.79701];
let marker = getMarker(coolLocation)

    function init() {
    map = new mapboxg1.Map({
        container: `map`, //container ID
        style: `mapbox://styles/mapbox/streets-v11`, //style URL
        //correct syntax ^ backtick and backtick or backtick and regular apostrophe?

    })
    }