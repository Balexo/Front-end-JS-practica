import { getAddDetailController } from "./advert-detail/advert-detail-controller.js";

document.addEventListener("DOMContentLoaded", () => {
  const advert = document.querySelector(".advert");
  getAddDetailController(advert);
});
