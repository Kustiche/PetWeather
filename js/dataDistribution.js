import { city, degrees, weatherType, searchTexts, detailsTexts } from "./view.js";

export function fillingSearchInformation(cityName, temp, feelsLike, iconCode, nameWeatherType) {
  city.textContent = cityName;

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

    if (isWindSpeedText) {
      element.textContent = `${speed}km/h`;
    } else if (isHumidityText) {
      element.textContent = `${humidity}%`;
    } else if (isSunsetText) {
      element.textContent = `${sunset}`;
    } else if (isSunriseText) {
      element.textContent = `${sunrise}`;
    }
  });
}
