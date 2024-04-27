import { cities, favoritesItem, favoritesList } from "./view.js";

export const favoritesCollection = new Set();

export function addFavoritesCollection() {
  cities.forEach((element) => {
    const isSearchCityName = element.dataset.cityName === "Search box";

    if (isSearchCityName && element.textContent !== "City name") {
      favoritesCollection.add(element.textContent);
    }
  });
}

export function addFavorites() {
  favoritesCollection.forEach((element) => {
    const favorit = favoritesItem.content.cloneNode(true);

    favorit.querySelector(".weather__city-name").textContent = element;

    favoritesList.append(favorit);
  });
}
