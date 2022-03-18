//Walkthorugh:
mapboxg1.accessToken = MAPBOX_API_KEU;
let map;
let geocoder;

init();
//command b takes you to where the function is defined
setGeocoderEventListener();
let coolLocation =   [-96.82015, 32.79701];
let marker = getMarker(coolLocation)

    function init() {
    map = new mapboxg1.Map({
        container: `map`, //container ID
        style: `mapbox://styles/mapbox/streets-v11`, //style URL
        //correct syntax ^ backtick and backtick or backtick and regular apostrophe?

    })
    }


    function setGeocoderEventListener() {
        geocoder.on("results", function (e) {
            console.log(this);
        });
    }

    //hint (e)
//e.result.geometry.coordinates
//function (e)
//then console.log(e.result.geometry.coordinates)

//TODO: build the rest myself because I gotta learn by doing this

//hint where attaching popup
//hint use toggleclass with popup

