import { search } from "./search.js";

export function favoriteWeatherSearch(e) {
  const isDeleteButton = e.target.className === "weather__delete btn-reset";
  const favorit = e.target.closest(".weather__favorites-item");

  if (!isDeleteButton && favorit) {
    const favoritText = favorit.querySelector(".weather__city-name");

    search(favoritText.textContent);
  }
}
