import { addListController } from "./advert-list/advert-list-controller.js";
import { spinnerController } from "./spinner/spinner-controller.js";

document.addEventListener("DOMContentLoaded", () => {
  const addList = document.querySelector(".advert-list");

  //Spinner
  const spinner = document.querySelector(".spinner");
  const { showSpinner, hideSpinner } = spinnerController(spinner);

  addList.addEventListener("show-spinner", showSpinner);
  addList.addEventListener("hide-spinner", hideSpinner);

  //Printing adverts
  addListController(addList);
});
