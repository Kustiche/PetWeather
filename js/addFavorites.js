import { deleteFavorites } from "./deleteFavorites.js";
import { cities, favoritesButtonIcon, favoritesItem, favoritesList } from "./view.js";

export const favoritesCollection = new Set();

export function checkFavoriteCity(name) {
  const isCollectionCityName = favoritesCollection.has(name);

  if (isCollectionCityName) {
    favoritesButtonIcon.classList.remove("active");
    deleteFavorites(name);
  } else {
    favoritesButtonIcon.classList.add("active");
    favoritesCollection.add(name);
  }
}

export function addFavoritesCollection() {
  cities.forEach((element) => {
    const isSearchCityName = element.dataset.cityName === "Search box";

    if (isSearchCityName && element.textContent !== "City name") {
      checkFavoriteCity(element.textContent);
    }
  });
}

export function addFavorites() {
  const favorites = [];

  favoritesCollection.forEach((element) => {
    favorites.unshift(element);
  });

  favorites.forEach((element) => {
    const favorit = favoritesItem.content.cloneNode(true);

    favorit.querySelector(".weather__city-name").textContent = element;

    favoritesList.append(favorit);
  });
}
