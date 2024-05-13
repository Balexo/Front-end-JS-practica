import { buildNotifications } from "./notification-view.js";

export function buildNotificationController(notificationContainer) {
  function showNotifications(message, type) {
    const notification = document.createElement("div");
    notification.classList.add("notification", type);
    notification.innerHTML = buildNotifications(message);
    notificationContainer.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 3000);
  }
  return { showNotifications };
}
