import { getAdds } from "./advert-list-model.js";
import { builAdvert, buildEmptyAdvert } from "./advert-list-view.js";
import { spinnerController } from "../spinner/spinner-controller.js";
import { loadSpinner } from "../utils/loadSpinner.js";

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
    loadSpinner("show-spinner", advertList);
    const adds = await getAdds();
    adds.length > 0 ? renderAdds(adds, advertList) : buildEmptyAdvert();
  } catch (error) {
    alert(error);
  } finally {
    loadSpinner("hide-spinner", advertList);
  }
}

async function renderAdds(adverts, advertList) {
  adverts.forEach((advert) => {
    const advertItem = document.createElement("div");
    advertItem.innerHTML = builAdvert(advert);
    advertList.appendChild(advertItem);
  });
}
