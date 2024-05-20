import { addListController } from "./advert-list/advert-list-controller.js";
import { spinnerController } from "./spinner/spinner-controller.js";
import { buildNotificationController } from "./notifications/notification-controller.js";
import { sessionController } from "./session/session-controller.js";

document.addEventListener("DOMContentLoaded", () => {
  const addList = document.querySelector(".advert-list");

  //Session controler
  const session = document.querySelector(".session");
  sessionController(session);

  //Spinner
  const spinner = document.querySelector(".spinner");
  const { showSpinner, hideSpinner } = spinnerController(spinner);

  addList.addEventListener("show-spinner", showSpinner);
  addList.addEventListener("hide-spinner", hideSpinner);

  //Notifications
  const notificationList = document.querySelector(".notification-list");
  const { showNotifications } = buildNotificationController(notificationList);
  addList.addEventListener("error-notification", (event) => {
    showNotifications(event.detail.message, event.detail.type);
  });

  //Printing adverts
  addListController(addList);
});
