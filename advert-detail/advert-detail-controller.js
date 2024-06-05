import {
  getAddDetail,
  deleteAd,
  getUserData,
  getAllIdAdverts,
} from "./advert-detail-model.js";
import { buildAdvert } from "../advert-list/advert-list-view.js";
import { goBackButton } from "../utils/goBackButton.js";
import { loadSpinner } from "../utils/loadSpinner.js";
import { dispatchEventDOM } from "../utils/dispatchEventDOM.js";

export async function getAddDetailController(advertDetail) {
  goBackButton(advertDetail);
  const adIds = await getAllIdAdverts();
  console.log(adIds);

  const params = new URLSearchParams(window.location.search);
  const adCurrentId = Number(params.get("addId"));

  if (!adCurrentId) {
    window.location.href = "./index.html";
  }

  if (adIds.includes(adCurrentId)) {
    try {
      loadSpinner("showSpinner", advertDetail);
      const add = await getAddDetail(adCurrentId);
      const container = advertDetail.querySelector(".container");
      container.innerHTML = buildAdvert(add);
      handleDeleteAddButton(advertDetail, add);
    } catch (error) {
      dispatchEventDOM(
        "error-notification",
        {
          message: error,
          type: "error",
        },
        advertDetail,
      );
    } finally {
      loadSpinner("hideSpinner", advertDetail);
    }

    async function handleDeleteAddButton(advertDetail, ad) {
      const token = localStorage.getItem("token");
      const userData = await getUserData(token);

      if (ad.user === userData.id) {
        const deleteAdButton = advertDetail.querySelector("#deleteAdButton");
        deleteAdButton.removeAttribute("disabled");

        deleteAdButton.addEventListener("click", () => {
          removeAd(ad.id, token, advertDetail);
        });
      }
    }

    async function removeAd(adId, token, advertDetail) {
      if (window.confirm("Are you sure you would like to delete the advert?")) {
        try {
          //throw new Error("This is a fake error");
          await deleteAd(adId, token);
          dispatchEventDOM(
            "add-deleted",
            {
              message: "Advert deleted succesfully",
              type: "success",
            },
            advertDetail,
          );
          setTimeout(() => {
            window.location = "./index.html";
          }, 3000);
        } catch (error) {
          dispatchEventDOM(
            "error-notification",
            {
              message: error,
              type: "error",
            },
            advertDetail,
          );
        }
      }
    }
  } else {
    dispatchEventDOM(
      "error-notification",
      {
        message: "This add does not exist",
        type: "error",
      },
      advertDetail,
    );

    setTimeout(() => {
      window.location = "./index.html";
    });
  }
}
