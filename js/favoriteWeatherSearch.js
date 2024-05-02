import { search } from "./search.js";
import { favoritesButtonIcon } from "./view.js";

export function favoriteWeatherSearch(e) {
  const isDeleteButton = e.target.className === "weather__delete btn-reset";
  const favorit = e.target.closest(".weather__favorites-item");

  if (!isDeleteButton && favorit) {
    const favoritText = favorit.querySelector(".weather__city-name");
    const isFavoriteBtnClass = favoritesButtonIcon.classList.contains("active");

    search(favoritText.textContent);

    if (!isFavoriteBtnClass) {
      favoritesButtonIcon.classList.add("active");
    }
  }
}
