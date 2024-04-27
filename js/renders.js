import { addFavorites } from "./addFavorites.js";
import { favoritesList } from "./view.js";

export function renderFavorites() {
  favoritesList.innerHTML = "";

  addFavorites();
}
