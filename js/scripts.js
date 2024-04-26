import { form } from "./view.js";
import { gettingCityName, search } from "./search.js";

form.addEventListener("submit", (e) => {
  gettingCityName(e);

  search();
});
