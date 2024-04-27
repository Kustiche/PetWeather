import { fillingDetailsInformation, fillingSearchInformation } from "./dataDistribution.js";

export let timeSunset = "";
export let timeSunrise = "";

const key = "33103c756038e60691b051e1c6d85024";
const url = "https://api.openweathermap.org/data/2.5/weather";
const messengError = {
  name: "Error,",
  messenge: "try again",
};

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

export function search(cityName) {
  fetch(`${url}?q=${cityName}&appid=${key}&units=metric`)
    .then((responce) => responce.json())
    .then((data) => {
      const {
        main: { humidity, temp, feels_like },
        sys: { sunrise, sunset },
        weather: [weather],
        wind: { speed },
      } = data;
      const { main: nameWeatherType, icon: iconCode } = weather;

      timeConversion(sunset, sunrise);

      fillingSearchInformation(cityName, temp, feels_like, iconCode, nameWeatherType);
      fillingDetailsInformation(speed, humidity, timeSunset, timeSunrise);
    })
    .catch(() => {
      alert(`${messengError.name} ${messengError.messenge}`);
    });
}
