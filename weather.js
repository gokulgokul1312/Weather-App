var inputValue = document.querySelector(".inputValue");
var button = document.querySelector(".button");
var cityName = document.querySelector(".cityName");
var country = document.querySelector(".country");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");

button.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputValue.value +
      "&appid=539804192249ba20abafd922066cc117"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      var nameValue = data["name"];
      var counValue = data["sys"]["country"];
      var tempValue = data["main"]["temp"];
      var descValue = data["weather"][0]["description"];

      cityName.innerHTML = nameValue;
      temp.innerHTML = Math.round((tempValue - 273.15) * 100) / 100 + `°C`;
      desc.innerHTML = descValue;
      country.innerHTML = counValue;
    })
    .catch((err) => {
      alert("Wrong city name!");
      inputValue.value = "";
      cityName.innerHTML = "";
      country.innerHTML = "";
      desc.innerHTML = "";
      temp.innerHTML = "";
    });
});