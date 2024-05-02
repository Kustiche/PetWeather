import { favoritesCollection } from "./addFavorites.js";
import { favoritesButtonIcon, formInput } from "./view.js";

export let cityName = "";

export function gettingCityName(e) {
  e.preventDefault();

  const name = formInput.value.toLowerCase();
  const isString = isNaN(name);
  const isCityFavorit = favoritesCollection.has(name);

  if (isString && isCityFavorit) {
    cityName = name;

    favoritesButtonIcon.classList.add("active");
  } else if (isString) {
    cityName = name;
    favoritesButtonIcon.classList.remove("active");
  }

  formInput.value = "";
}
