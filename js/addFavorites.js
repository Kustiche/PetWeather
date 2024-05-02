import { deleteFavorites } from "./deleteFavorites.js";
import { cities, favoritesButtonIcon, favoritesItem, favoritesList } from "./view.js";

export const favoritesCollection = new Set();

export function addFavoritesCollection(e) {
  cities.forEach((element) => {
    const isSearchCityName = element.dataset.cityName === "Search box";
    const isCollectionCityName = favoritesCollection.has(element.textContent);

    if (isSearchCityName && element.textContent !== "City name") {
      favoritesCollection.add(element.textContent);
    }

    if (isCollectionCityName) {
      favoritesButtonIcon.classList.remove("active");
      deleteFavorites(e, element.textContent);
    } else {
      favoritesButtonIcon.classList.add("active");
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
