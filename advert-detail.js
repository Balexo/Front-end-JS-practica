import { getAddDetailController } from "./advert-detail/advert-detail-controller.js";
import { spinnerController } from "./spinner/spinner-controller.js";
import { buildNotificationController } from "./notifications/notification-controller.js";

document.addEventListener("DOMContentLoaded", () => {
  const advert = document.querySelector(".advert");

  //Spinner
  const spinner = document.querySelector(".spinner");
  const { showSpinner, hideSpinner } = spinnerController(spinner);
  advert.addEventListener("showSpinner", showSpinner);
  advert.addEventListener("hideSpinner", hideSpinner);

  //Notification
  const notification = document.querySelector(".notification-list");
  const { showNotifications } = buildNotificationController(notification);
  advert.addEventListener("error-notification", (event) => {
    showNotifications(event.detail.message, event.detail.type);
  });
  advert.addEventListener("add-deleted", (event) => {
    showNotifications(event.detail.message, event.detail.type);
  });

  getAddDetailController(advert);
});
