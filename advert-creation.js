import { createAdvertController } from "./advert-creation/advert-creation-controller.js";

document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "index.html";
  }
  const createAd = document.querySelector(".create-ad");

  createAdvertController(createAd);
});
