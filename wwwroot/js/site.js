$(document).ready(function() {

    let airportCode = $("#airportSelect").find(":selected").val();
    console.log(airportCode);

    $("#airportSelect").change(function() {
        location.reload();
        
    });

    let apiUrl = "http://api.weatherapi.com/v1/current.json?key=5068a32470324e3b963231912221905&q=" + airportCode + "&aqi=no";

    $.ajax({
        url: apiUrl,
        context: document.body
    }).done(function(result) {
        $("#weatherImage").attr("src", result.current.condition.icon);
        $("#locationHeader").text(result.location.name);
        $("#country").text(result.location.country);
        $("#locationCurrent").text(result.current.condition.text);
        $("#currentTime").text(result.location.localtime);

        $("#windDir").text(result.current.wind_dir);
        $("#currentTemp").text(result.current.temp_c);
        $("#currentTemp").append("°C");
        $("#currentWind").text(result.current.wind_kph);
        $("#currentWind").append(" km/h")
        $("#relHumidity").text(result.current.humidity);
        $("#relHumidity").append("%");
    });



    // let _res;
    // let locationName = "Paris";
    // let airports = ["AKL", "WLG", "CHC", "ZQN", "HLZ"];

    // let apiUrl = "http://api.weatherapi.com/v1/current.json?key=5068a32470324e3b963231912221905&q=" + airports[0] + "&aqi=no";

    // for (index = 0; index < airports.length; index++) {
    //     let apiUrl = "http://api.weatherapi.com/v1/current.json?key=5068a32470324e3b963231912221905&q=" + airports[index] + "&aqi=no";
    //     // callApi();
    //     console.log(apiUrl);
    // }

    // console.log(apiUrl);

    // function callApi() {
    //         const weatherCall = async () => {
    //         // let _res;
    //         try {
    //             const res = await fetch(apiUrl);
    //             _res = await res.json();
    //         } catch {
    //             throw new Error("Error, call did not succeed");
    //         }
    //         return _res;
    //     }
    // }


    // $(document).ready(function() {
        
    // });

    // $.ajax({})
    

    // weatherCall().then(res => {
    //     document.getElementById("locationHeader").innerText = res.location.name;
    //     document.getElementById("locationHeader").append(", " + res.location.region)

    //     document.getElementById("country").innerText = res.location.country;

    //     document.getElementById("currentTime").innerText = res.location.localtime;
    //     document.getElementById("currentTime").prepend("The current local time is: ");


    //     document.getElementById("weatherImage").src = res.current.condition.icon;

    //     document.getElementById("currentTemp").innerText = res.current.temp_c;
    //     document.getElementById("currentTemp").append(" Degrees Celcius");


    //     document.getElementById("locationCurrent").innerText = res.current.condition.text;
    //     document.getElementById("windDir").innerText = res.current.wind_dir;
    //     document.getElementById("windDir").prepend("Wind Direction: ");

    //     document.getElementById("currentWind").innerText = res.current.wind_kph;
    //     document.getElementById("currentWind").prepend("Wind speed: ");
    //     document.getElementById("currentWind").append(" K/ph");

    //     document.getElementById("relHumidity").innerText = res.current.humidity;
    //     document.getElementById("relHumidity").prepend("Relative Humidity: ");
    //     document.getElementById("relHumidity").append("%");
    // })
});

