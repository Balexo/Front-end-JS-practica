import { getAddDetailController } from "./advert-detail/advert-detail-controller.js";
import { spinnerController } from "./spinner/spinner-controller.js";
import { dispatchEventDOM } from "./utils/dispatchEventDOM.js";

document.addEventListener("DOMContentLoaded", () => {
  const advert = document.querySelector(".advert");

  //Spinner
  const spinner = document.querySelector(".spinner");
  const { showSpinner, hideSpinner } = spinnerController(spinner);
  advert.addEventListener("showSpinner", showSpinner);
  advert.addEventListener("hideSpinner", hideSpinner);

  getAddDetailController(advert);
});
