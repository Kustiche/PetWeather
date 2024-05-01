import { formInput } from "./view.js";

export let cityName = "";

export function gettingCityName(e) {
  e.preventDefault();

  const name = formInput.value;
  const isString = isNaN(formInput.value);

  if (isString) {
    cityName = name.toLowerCase();
  }

  formInput.value = "";
}
