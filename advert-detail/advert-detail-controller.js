import { getAddDetail } from "./advert-detail-model.js";
import { buildAdvert } from "../advert-list/advert-list-view.js";

export async function getAddDetailController(advertDetail) {
  goBackButton();
  const params = new URLSearchParams(window.location.search);
  const addId = params.get("addId");
  if (!addId) {
    window.location.href = "./index.html";
  }
  try {
    const add = await getAddDetail(addId);
    debugger;
    const container = advertDetail.querySelector(".container");
    container.innerHTML = buildAdvert(add);
  } catch (error) {
    alert(error);
  }

  function goBackButton() {
    const goBackButton = document.querySelector("#goBack");
    goBackButton.addEventListener("click", () => {
      window.history.back();
    });
  }
}
