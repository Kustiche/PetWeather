import { forecastItem, forecastList } from "./view.js";

let convertedTime = "";

function forecastTimeConversion(hours, minutes) {
  const hoursForecast = hours < 10 ? "0" + hours : hours;
  const minutesForecast = minutes < 10 ? "0" + minutes : minutes;

  convertedTime = `${hoursForecast}:${minutesForecast}`;
}

export function cleanForecastCollection() {}

export function addForecastCollection(date, temp, feelsLike, nameWeatherType, iconCode) {
  const forecast = forecastItem.content.cloneNode(true);
  const forecastTexts = forecast.querySelectorAll(".weather__forecast-text");
  const forecastImg = forecast.querySelector(".weather__forecast-img");
  const forecastTime = forecast.querySelector(".weather__time");
  const forecastDate = forecast.querySelector(".weather__date");
  const newDate = new Date(date);
  const arrayMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  forecastDate.textContent = `${newDate.getDate()} ${arrayMonth[newDate.getMonth()]}`;

  forecastTimeConversion(newDate.getHours(), newDate.getMinutes());

  forecastTime.textContent = convertedTime;

  forecastTexts.forEach((element) => {
    const isTemperature = element.dataset.forecastText === "Temperature";
    const isFeelsLike = element.dataset.forecastText === "Feels like";
    const isWeatherType = element.dataset.forecastText === "Weather type";

    if (isTemperature) {
      element.textContent = `Temperature: ${Math.round(temp)}`;
    } else if (isFeelsLike) {
      element.textContent = `Feels like: ${Math.round(feelsLike)}`;
    } else if (isWeatherType) {
      element.textContent = nameWeatherType;
    }
  });

  forecastImg.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  forecastList.append(forecast);
}
