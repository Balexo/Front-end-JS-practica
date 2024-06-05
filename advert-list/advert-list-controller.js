import { getAdds } from "./advert-list-model.js";
import { buildAdvert, buildEmptyAdvert } from "./advert-list-view.js";
import { loadSpinner } from "../utils/loadSpinner.js";
import { dispatchEventDOM } from "../utils/dispatchEventDOM.js";

export async function addListController(advertList) {
  try {
    loadSpinner("show-spinner", advertList);
    const adds = await getAdds();
    adds.length > 0
      ? renderAdds(adds, advertList)
      : buildEmptyAdvert(advertList);
  } catch (error) {
    dispatchEventDOM(
      "error-notification",
      {
        message: error,
        type: "error",
      },
      advertList,
    );
  } finally {
    loadSpinner("hide-spinner", advertList);
  }
}

async function renderAdds(adverts, advertList) {
  adverts.forEach((advert) => {
    const advertItem = document.createElement("div");
    advertItem.innerHTML = buildAdvert(advert);
    advertList.appendChild(advertItem);
  });
}
