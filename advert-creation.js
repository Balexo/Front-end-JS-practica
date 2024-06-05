import { createAdvertController } from "./advert-creation/advert-creation-controller.js";
import { spinnerController } from "./spinner/spinner-controller.js";
import { buildNotificationController } from "./notifications/notification-controller.js";

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

  //Notification
  const notification = document.querySelector(".notification-list");
  const { showNotifications } = buildNotificationController(notification);
  insertAdFromUser.addEventListener("error-notification", (event) => {
    showNotifications(event.detail.message, event.detail.type);
    event.stopPropagation();
  });
  insertAdFromUser.addEventListener("advert-created", (event) => {
    showNotifications(event.detail.message, event.detail.type);
    event.stopPropagation();
  });

  createAdvertController(insertAdFromUser);
});
