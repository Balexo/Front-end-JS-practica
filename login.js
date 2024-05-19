import { loginController } from "./login/login-controller.js";
import { spinnerController } from "./spinner/spinner-controller.js";
import { buildNotificationController } from "./notifications/notification-controller.js";

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector(".login-form");

  //Spinner
  const spinner = document.querySelector(".spinner");
  const { showSpinner, hideSpinner } = spinnerController(spinner);
  spinner.addEventListener("spinner-login-on", showSpinner);
  spinner.addEventListener("spinner-login-off", hideSpinner);

  //Notification
  const notification = document.querySelector(".notification-list");
  const { showNotifications } = buildNotificationController(notification);
  loginForm.addEventListener("error-login", (event) => {
    showNotifications(event.detail.message, event.detail.type);
    event.stopPropagation();
  });

  //Login
  loginController(loginForm);
});
