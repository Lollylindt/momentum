const API_KEY = "88badad28419d82b89eed6e09d1a8a72";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name; 
        weather.innerText = `${data.weather[0].main} + ${data.main.temp}°` });
}
function onGeoError(){
    alert("Can't find you. Weather can't be loaded.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);