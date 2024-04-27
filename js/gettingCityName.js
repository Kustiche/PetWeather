import { formInput } from "./view.js";

export let cityName = "";

export function gettingCityName(e) {
  e.preventDefault();

  cityName = formInput.value;
}
