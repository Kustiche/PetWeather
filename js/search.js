import { addForecastCollection } from "./addForecast.js";
import { fillingDetailsInformation, fillingSearchInformation } from "./dataDistribution.js";
import { renderForecast } from "./renders.js";

const key = "33103c756038e60691b051e1c6d85024";
const url = "https://api.openweathermap.org/data/2.5/weather";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast";
const messengError = {
  name: "Error, ",
  messenge: "incorrect city name.",
};

export async function search(cityName) {
  try {
    const responseArray = await Promise.all([
      fetch(`${url}?q=${cityName}&appid=${key}&units=metric`),
      fetch(`${forecastUrl}?q=${cityName}&appid=${key}&units=metric`),
    ]);

    const data = await responseArray[0].json();
    const dataForecast = await responseArray[1].json();

    const {
      main: { humidity, temp, feels_like: feelsLike },
      sys: { sunrise, sunset },
      weather: [weather],
      wind: { speed },
    } = data;
    const { main: nameWeatherType, icon: iconCode } = weather;

    renderForecast();

    fillingSearchInformation(cityName, temp, feelsLike, iconCode, nameWeatherType);
    fillingDetailsInformation(speed, humidity, sunset, sunrise);

    for (let i = 0; i <= 6; i++) {
      const {
        dt_txt: date,
        main: { temp, feels_like: feelsLike },
        weather: [weather],
      } = dataForecast.list[i];
      const { main: nameWeatherType, icon: iconCode } = weather;

      addForecastCollection(date, temp, feelsLike, nameWeatherType, iconCode);
    }
  } catch {
    alert(messengError.name + messengError.messenge);
  }
}
