const weather = document.querySelector("#weather span:first-child");
const doc = document.querySelector("#weather span:nth-child(2)");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "ac64a58fd2d7f667a324c92d4210228e";


function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
      doc.innerText = data.main.temp
    });
}
function onGeoError(){
  alert("날씨정보를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
