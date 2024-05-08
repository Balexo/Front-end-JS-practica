import { buildNotifications } from "./notification-view.js";

export function buildNotificationController(notificationContainer) {
  function showNotifications(message, type = "success") {
    const notification = document.createElement("div");
    notification.classList.add("notification", type);
    notification.innerHTML = buildNotifications(message);
    notificationContainer.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 6000);
  }
  return { showNotifications };
}
