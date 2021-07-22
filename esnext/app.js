let favoriteCityId = "Rome";
console.log(favoriteCityId);
favoriteCityIde = "Paris";
console.log(favoriteCityId);
const cityId = ["Rome","Paris","nyc","Rio-De-Janero"];
console.log(cityId);
//cityId = [];
//cityId = ["Rome","Paris","nyc","Rio-De-Janero","Tokyo"];

function getWeather(cityId){
    let city = cityId.toUpperCase();
    let temperature = 20; 
    return {city, temperature};
}
const weather = getWeather(favoriteCityId);
console.log(weather);

let Weather = {city: "Paris", temperature : 20};
console.log(Weather);

const citiesId = [ParisId, nycId, ...otherCityId];
console.log(citiesId[0]);
console.log(citiesId[1]);
console.log(citiesId.length);
