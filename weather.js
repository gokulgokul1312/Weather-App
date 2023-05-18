var inputValue = document.getElementById('city');
var button = document.getElementById('btn');
var cityName = document.getElementById('cityName');
var country = document.getElementById('country');
var temp = document.getElementById('temp');
var desc = document.getElementById('desc');
var wind = document.getElementById('wind');
var img = document.getElementById('img');

button.addEventListener("click",function(){
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +  inputValue.value + "&appid=539804192249ba20abafd922066cc117"
    )
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        nameValue = data["name"]
        cityName.innerHTML = nameValue;
        country.innerHTML = data["sys"]["country"];
        tempValue = data["main"]["temp"];
        temp.innerHTML = Math.round((tempValue - 273.15) * 100) / 100 + `°C`;
        desc.innerHTML = data["weather"][0]["description"];
        wind.innerHTML = data["wind"]["speed"] + ` S`;
        img.src=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    })
    .catch((err) => {
        alert("Please enter correct city name");
            cityName.innerHTML = "City";
            country.innerHTML = "Country";
            temp.innerHTML = "0";
            desc.innerHTML = "0";
            wind.innerHTML = "0";
            img.src = "https://openweathermap.org/img/wn/10d@2x.png";
    })
})