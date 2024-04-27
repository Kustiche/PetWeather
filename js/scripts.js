import { favoritesButton, favoritesList, form } from "./view.js";
import { search } from "./search.js";
import { addFavoritesCollection } from "./addFavorites.js";
import { renderFavorites } from "./renders.js";
import { deleteFavorites } from "./deleteFavorites.js";
import { gettingCityName, cityName } from "./gettingCityName.js";
import { favoriteWeatherSearch } from "./favoriteWeatherSearch.js";

form.addEventListener("submit", (e) => {
  gettingCityName(e);
  search(cityName);
});

favoritesButton.addEventListener("click", () => {
  addFavoritesCollection();
  renderFavorites();
});

favoritesList.addEventListener("click", (e) => {
  favoriteWeatherSearch(e);
  deleteFavorites(e);
});
