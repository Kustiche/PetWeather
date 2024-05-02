import { checkFavoriteCity, favoritesCollection } from "./addFavorites.js";
import { renderFavorites } from "./renders.js";

export function gettingName(e) {
  const isDeleteButton = e.target.className === "weather__delete btn-reset";

  if (isDeleteButton) {
    const favorit = e.target.closest(".weather__favorites-item");
    const favoritText = favorit.querySelector(".weather__city-name");

    checkFavoriteCity(favoritText.textContent);
  }
}

export function deleteFavorites(name) {
  favoritesCollection.delete(name);

  renderFavorites();
}
