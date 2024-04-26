import { url, key, formInput } from "./view.js";
import { fillingDetailsInformation, fillingSearchInformation } from "./dataDistribution.js";

export let cityName = "";
export let timeSunset = "";
export let timeSunrise = "";

const messengError = {
  name: "Error,",
  messenge: "try again",
};

function timeConversion(sunset, sunrise) {
  const dateSunset = new Date(sunset * 1000);
  const dateSunrise = new Date(sunrise * 1000);

  timeSunset = `${dateSunset.getHours() < 10 ? "0" + dateSunset.getHours() : dateSunset.getHours()}:${
    dateSunset.getMinutes() < 10 ? "0" + dateSunset.getMinutes() : dateSunset.getMinutes()
  }`;
  timeSunrise = `${dateSunrise.getHours() < 10 ? "0" + dateSunrise.getHours() : dateSunrise.getHours()}:${
    dateSunrise.getMinutes() < 10 ? "0" + dateSunrise.getMinutes() : dateSunrise.getMinutes()
  }`;
}

export function gettingCityName(e) {
  e.preventDefault();

  cityName = formInput.value;
}

export function search() {
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
