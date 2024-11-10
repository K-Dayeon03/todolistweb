
const API_KEY="018c872b0fc33034ee53af27febf0cc9";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const  url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        }); 
}

function onGeoError(){
    alert("Can't find you. No weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError); //getCurrentPosition은 argument가 2개 필요함. (1. 모든 게 잘됐을 때 실행될 함수, 2. 에러 났을 때 실행될 함수)

