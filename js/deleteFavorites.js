import { favoritesCollection } from "./addFavorites.js";
import { renderFavorites } from "./renders.js";

export function deleteFavorites(e, name) {
  const isDeleteButton = e.target.className === "weather__delete btn-reset";

  if (isDeleteButton) {
    const favorit = e.target.closest(".weather__favorites-item");
    const favoritText = favorit.querySelector(".weather__city-name");

    favoritesCollection.delete(favoritText.textContent);

    renderFavorites();
  } else {
    favoritesCollection.delete(name);

    renderFavorites();
  }
}
