import { favoritesCollection } from "./addFavorites.js";
import { renderFavorites } from "./renders.js";

export function localStorageData() {
  const localStorageArray = [];

  favoritesCollection.forEach((favorit) => {
    localStorageArray.push(favorit);
  });

  localStorage.setItem("favorites", JSON.stringify(localStorageArray));
}

export function gettingLocalData() {
  const favoritesArray = JSON.parse(localStorage.getItem("favorites"));

  favoritesArray.forEach((favorit) => {
    favoritesCollection.add(favorit);
  });

  renderFavorites();
}
