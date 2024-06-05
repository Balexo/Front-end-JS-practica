import { createAdvertController } from "./advert-creation/advert-creation-controller.js";
import { spinnerController } from "./spinner/spinner-controller.js";

document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "index.html";
  }
  const insertAdFromUser = document.querySelector(".create-ad");

  //Spinner
  const spinner = document.querySelector(".spinner");
  const { showSpinner, hideSpinner } = spinnerController(spinner);
  insertAdFromUser.addEventListener("showSpinner", showSpinner);
  insertAdFromUser.addEventListener("hideSpinner", hideSpinner);

  createAdvertController(insertAdFromUser);
});
