// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


// const requestURL = "test_response.json";
// const jsonObject = JSON.parse(requestURL);
// console.log(jsonObject);


// const obj = JSON.parse('{ "location": { "name": "Taradale", "region": "Hawkes Bay", "localtime": "2022-05-20 11:23"}}');

const weatherLocation = '{ "location": {"name": "Taradale", "region": "", "country": "New Zealand", "lat": -39.53, "lon": 176.85, "tz_id": "Pacific/Auckland", "localtime_epoch": 1653002605, "localtime": "2022-05-20 11:23"}}';
const weatherCurrent = '{ "current": { "last_updated_epoch": 1653002100, "last_updated": "2022-05-20 11:15", "temp_c": 16.8, "temp_f": 62.2, "is_day": 1, "condition": { "text": "Sunny", "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png", "code": 1000}, "wind_mph": 18.8, "wind_kph": 30.2, "wind_degree": 316, "wind_dir": "NW", "pressure_mb": 1002.0, "pressure_in": 29.6, "precip_mm": 0.0, "precip_in": 0.0, "humidity": 56, "cloud": 19, "feelslike_c": 16.8, "feelslike_f": 62.2, "vis_km": 10.0, "vis_miles": 6.0, "uv": 5.0, "gust_mph": 26.4, "gust_kph": 42.5 }}';

weatherLocationParsed = JSON.parse(weatherLocation);
weatherCurrentParsed = JSON.parse(weatherCurrent);
// console.log(weatherCurrentParsed);
