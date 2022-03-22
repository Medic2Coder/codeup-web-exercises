$(document).ready(function() {
    //added just in case ^



//default public token
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFya2FuZGVyc29uMCIsImEiOiJjbDEwbGQ5OW0wdjcwM2pzMWNkcHVvYnM5In0.yCiJw13Nfp6AnBLYSjiuyw';


    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/markanderson0/cl11qnq87000c14s2oru88bx8',
        center: [-98.4915, 29.4251],
        zoom: 11
    });

    var marker = new mapboxgl.Marker({draggable: true})
        .setLngLat([-98.4935, 29.4240])
        .addTo(map);

    const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    });

    map.addControl(geocoder);

    geocoder.on('result', function(data) {
        console.log(data)
        $("#word").html(data.result.place_name);
        console.log(data.result.center)
        marker.setLngLat(data.result.center);
        weather(data.result.center[1],data.result.center[0]);
    });


    map.addControl(new mapboxgl.NavigationControl());


    marker.on('dragend', function () {
        var markerCoordinates = marker.getLngLat();
        weather(markerCoordinates.lat, markerCoordinates.lng);

    });

    function weather(lat, lon) {
        $.get('https://api.openweathermap.org/data/2.5/onecall', {
            appid: OWM_KEY,
            lat: lat,
            lon: lon,
            units: 'imperial',
            exclude: 'minutely,hourly,'
        }).done(function (data) {
            createWeather(data);

        }).fail(function (error) {
            console.log(error);
        });

        function weather2 (lat, lon) {
            $.get('https://api.openweathermap.org/data/2.5/onecall', {
                appid: OWM_KEY,
                lat: lat,
                lon: lon,
                units: 'imperial',
                exclude: 'minutely,hourly,'
            }).done(function (data) {
                createWeather2(data);

            }).fail(function (error) {
                console.log(error);
            });
        }
    }
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    function createWeather(data){

        var html = "";

        data.daily.forEach(function (day, index) {
            //These 2 variables convert the day.dt into day-month-year


            let current_datetime = new Date(day.dt * 1000);
            let formatted_date = current_datetime.getDate() + "-" + months[current_datetime.getMonth()]  + "-" + current_datetime.getFullYear();
//*
            html += ('<article>' +
                '<p class="list-item">' + formatted_date + '</p>' +
                '<p class="list-item">' + '<img src="http://openweathermap.org/img/wn/' + day.weather[0].icon + '@2x.png"/>' + '</p>' +
                '<p class="list-item">' + day.temp.min + '°F' + ' / ' + day.temp.max + '°F' + '</p>' +
                '<p class="list-item">' + 'Description: ' + day.weather[0].description + '</p>' +
                '<p class="list-item">' + 'Humidity: ' + day.humidity + '</p>' +

                '</article>');
        });
        $("#card-section1").html(html);

        data.daily.forEach(function (day, index) {
            //These 2 variables convert the day.dt into day-month-year


            let current_datetime = new Date(day.dt * 1000);
            let formatted_date = current_datetime.getDate() + "-" + months[current_datetime.getMonth()]  + "-" + current_datetime.getFullYear();
//*
            html += ('<article>' +
                '<p class="list-item">' + formatted_date + '</p>' +
                '<p class="list--item">' + '<img src="http://openweathermap.org/img/wn/' + day.weather[0].icon + '@2x.png"/>' + '</p>' +
                '<p class="list-item">' + day.temp.min + '°F' + ' / ' + day.temp.max + '°F' + '</p>' +
                // '<p class="list-group-item">' + day.temp.min + '°C' + ' / ' + day.temp.max + '°F' + '</p>' +
                '<p class="list-item">' + 'Description: ' + day.weather2[0].description + '</p>' +
                '<p class="list-item">' + 'Humidity: ' + day.humidity + '</p>' +

                '</article>');
        });
        $("#card-section2").html(html);



    }



    weather(29.4252, -98.4916);

});
