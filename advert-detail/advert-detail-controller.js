import { getAddDetail, deleteAd, getUserData } from "./advert-detail-model.js";
import { buildAdvert } from "../advert-list/advert-list-view.js";
import { goBackButton } from "../utils/goBackButton.js";
import { loadSpinner } from "../utils/loadSpinner.js";

export async function getAddDetailController(advertDetail) {
  goBackButton(advertDetail);

  const params = new URLSearchParams(window.location.search);
  const addId = params.get("addId");
  debugger;

  if (!addId) {
    window.location.href = "./index.html";
  }
  try {
    loadSpinner("showSpinner", advertDetail);
    const add = await getAddDetail(addId);
    const container = advertDetail.querySelector(".container");
    container.innerHTML = buildAdvert(add);
    handleDeleteAddButton(advertDetail, add);
  } catch (error) {
    alert(error);
  } finally {
    loadSpinner("hideSpinner", advertDetail);
  }

  async function handleDeleteAddButton(advertDetail, ad) {
    const token = localStorage.getItem("token");
    const userData = await getUserData(token);

    if (ad.user === userData.id) {
      const deleteAdButton = advertDetail.querySelector("#deleteAdButton");
      deleteAdButton.removeAttribute("disabled");

      debugger;
      deleteAdButton.addEventListener("click", () => {
        debugger;
        removeAd(ad.id, token);
      });
    }
  }

  async function removeAd(adId, token) {
    if (window.confirm("Are you sure you would like to delete the advert?")) {
      try {
        debugger;
        await deleteAd(adId, token);
        alert("add deleted");
        window.location = "./index.html";
      } catch (error) {
        alert(error);
      }
    }
  }
}
