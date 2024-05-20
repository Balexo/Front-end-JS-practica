import { signupController } from "./sign-up/signup-controller.js";
import { buildNotificationController } from "./notifications/notification-controller.js";
import { spinnerController } from "./spinner/spinner-controller.js";

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector(".login-form");

  // Spinner
  const spinner = document.querySelector(".spinner");
  const { showSpinner, hideSpinner } = spinnerController(spinner);

  loginForm.addEventListener("show-spinner", showSpinner);
  loginForm.addEventListener("hide-spinner", hideSpinner);

  //Notification
  const notifications = document.querySelector(".notification-list");
  const { showNotifications } = buildNotificationController(notifications);

  loginForm.addEventListener("error-signup", (event) => {
    showNotifications(event.detail.message, event.detail.type);
    event.stopPropagation();
  });
  loginForm.addEventListener("signup-correctly", (event) => {
    showNotifications(event.detail.message, event.detail.type);
    event.stopPropagation();
  });

  signupController(register);
});
