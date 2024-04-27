import { search } from "./search.js";

export function favoriteWeatherSearch(e) {
  const isDeleteButton = e.target.className === "weather__delete btn-reset";

  if (!isDeleteButton) {
    const favorit = e.target.closest(".weather__favorites-item");
    const favoritText = favorit.querySelector(".weather__city-name");

    search(favoritText.textContent);
  }
}
