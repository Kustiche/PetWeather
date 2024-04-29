import { formInput } from "./view.js";

export let cityName = "";

export function gettingCityName(e) {
  e.preventDefault();

  const isString = isNaN(formInput.value);

  if (isString) {
    cityName = formInput.value;
  }
}
