$(document).ready(function() {

    let airportCode = $("#airportSelect").find(":selected").val();
    let airports = ["akl", "wlg", "chc", "zqn", "hlz", "npe"];
    let airportsReturned = [];
    let viewPortWidth = window.innerWidth;

    $("#airportSelect").change(function() {
        location.reload();
        
    });

    let apiUrl = "http://api.weatherapi.com/v1/current.json?key=5068a32470324e3b963231912221905&q=" + airportCode + "&aqi=no";

    for (i = 0; i < airports.length; i++) {
        let url = "https://api.weatherapi.com/v1/current.json?key=5068a32470324e3b963231912221905&q=" + airports[i] + "&aqi=no";
        
        $.ajax({
            url: url,
            context: document.body
        }).done(function(resultArray) {
            airportsReturned.push(resultArray);
        });
    }

    console.log(airportsReturned);

    $.ajax({
        url: apiUrl,
        context: document.body
    }).done(function(result) {
        $("#weatherImage").attr("src", result.current.condition.icon);
        $("#locationHeader").text(result.location.name);
        $("#locationHeader").append(",");
        $("#country").text(result.location.country);
        $("#locationCurrent").text(result.current.condition.text);
        $("#lastUpdated").text(result.current.last_updated);

        $("#windDir").text(result.current.wind_dir);
        $("#currentTemp").text(result.current.temp_c);
        $("#currentTemp").append("°C");
        $("#currentWind").text(result.current.wind_kph);
        $("#currentWind").append(" km/h")
        $("#relHumidity").text(result.current.humidity);
        $("#relHumidity").append("%");
        $("#precip").text(result.current.precip_mm);
    });
});

