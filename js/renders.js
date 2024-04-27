import { addFavorites } from "./addFavorites.js";
import { favoritesList, forecastList } from "./view.js";

export function renderFavorites() {
  favoritesList.innerHTML = "";

  addFavorites();
}

export function renderForecast() {
  forecastList.innerHTML = "";
}
