"use strict";
let weather = {
  apiKey: `a51f44f94d0b1831ce5510a7e495405b`,
  fetchWeather: function (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },

  displayWeather: function (data) {
    const { name } = data;
    const { description, icon } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    const tempFahrenheit = Math.round((temp * 9) / 5 + 32);
    const speedToMph = speed / 1.6093440006147;
    const speedMph = speedToMph.toFixed(1);

    document.querySelector(".city").innerText = `Weather in ${name}`;
    document.querySelector(".temp").innerText = `${tempFahrenheit}°F`;
    document.querySelector(
      ".icon"
    ).src = `https://openweathermap.org/img/wn/${icon}.png`;
    document.querySelector(".description").innerText = `${description}`;
    document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`;
    document.querySelector(".wind").innerText = `Wind Speed: ${speedMph} mph`;

    document.body.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?${name}")`;
    document.querySelector(".weather").classList.remove("loading");
  },

  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", () => {
  weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    weather.search();
  }
});

// a51f44f94d0b1831ce5510a7e495405b
//   `https://api.openweathermap.org/data/2.5/weather?q=Denver&units=metric&appid=a51f44f94d0b1831ce5510a7e495405b`
// `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
// `https://source.unsplash.com/1600x900/?${name}`
// `https://openweathermap.org/img/wn/${icon}.png`

weather.fetchWeather("Denver");
