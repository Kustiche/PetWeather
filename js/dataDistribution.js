import { cities, degrees, weatherType, searchTexts, detailsTexts } from "./view.js";

let timeSunset = "";
let timeSunrise = "";

function timeConversion(sunset, sunrise) {
  const dateSunset = new Date(sunset * 1000);
  const dateSunrise = new Date(sunrise * 1000);
  const hoursSunset = dateSunset.getHours() < 10 ? "0" + dateSunset.getHours() : dateSunset.getHours();
  const minutesSunset = dateSunset.getMinutes() < 10 ? "0" + dateSunset.getMinutes() : dateSunset.getMinutes();
  const hoursSunrise = dateSunrise.getHours() < 10 ? "0" + dateSunrise.getHours() : dateSunrise.getHours();
  const minutesSunrise = dateSunrise.getMinutes() < 10 ? "0" + dateSunrise.getMinutes() : dateSunrise.getMinutes();

  timeSunset = `${hoursSunset}:${minutesSunset}`;
  timeSunrise = `${hoursSunrise}:${minutesSunrise}`;
}

export function fillingSearchInformation(cityName, temp, feelsLike, iconCode, nameWeatherType) {
  cities.forEach((element) => {
    const isSearchCityName = element.dataset.cityName === "Search box";

    if (isSearchCityName) {
      element.textContent = cityName;
    }
  });

  degrees.forEach((element) => {
    const isDegreeWeatherNow = element.dataset.degree === "Weather now";
    const isDegreeFeelsLike = element.dataset.degree === "Feels like";

    if (isDegreeWeatherNow) {
      element.textContent = Math.round(temp);
    } else if (isDegreeFeelsLike) {
      element.textContent = Math.round(feelsLike);
    }
  });

  weatherType.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  searchTexts.forEach((element) => {
    const isTextWeatherType = element.dataset.textWeatherType === "Weather type";

    if (isTextWeatherType) {
      element.textContent = nameWeatherType;
    }
  });
}

export function fillingDetailsInformation(speed, humidity, sunset, sunrise) {
  detailsTexts.forEach((element) => {
    const isWindSpeedText = element.dataset.detailsText === "Wind speed";
    const isHumidityText = element.dataset.detailsText === "Humidity";
    const isSunsetText = element.dataset.detailsText === "Sunset";
    const isSunriseText = element.dataset.detailsText === "Sunrise";

    timeConversion(sunset, sunrise);

    if (isWindSpeedText) {
      element.textContent = `${speed}km/h`;
    } else if (isHumidityText) {
      element.textContent = `${humidity}%`;
    } else if (isSunsetText) {
      element.textContent = `${timeSunset}`;
    } else if (isSunriseText) {
      element.textContent = `${timeSunrise}`;
    }
  });
}
