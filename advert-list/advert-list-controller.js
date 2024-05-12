import { getAdds } from "./advert-list-model.js";
import { builAdvert } from "./advert-list-view.js";
import { buildNotificationController } from "../notifications/notification-controller.js";

const { showNotifications } = buildNotificationController();

export function addListController(advertList) {
  const showAddButton = document.createElement("button");
  showAddButton.textContent = "Mostrar anuncios";
  advertList.appendChild(showAddButton);
  showAddButton.addEventListener("click", async () => {
    handleShowAddsButtonClicked(advertList);
  });
}

async function handleShowAddsButtonClicked(advertList) {
  try {
    const adds = await getAdds();
    renderAdds(adds, advertList);
  } catch (error) {
    alert(error);
  }
}

async function renderAdds(adverts, advertList) {
  adverts.forEach((advert) => {
    const advertItem = document.createElement("div");
    advertItem.innerHTML = builAdvert(advert);
    advertList.appendChild(advertItem);
  });
}
