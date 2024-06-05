import { createAdvert } from "./advert-creation-model.js";
import { goBackButton } from "../utils/goBackButton.js";
import { loadSpinner } from "../utils/loadSpinner.js";
import { dispatchEventDOM } from "../utils/dispatchEventDOM.js";

export function createAdvertController(insertAdFromUser) {
  goBackButton(insertAdFromUser);

  insertAdFromUser.addEventListener("submit", (event) => {
    event.preventDefault();

    handleFieldsAdFormSubmit(insertAdFromUser);
  });

  function handleFieldsAdFormSubmit(insertAdFromUser) {
    let errors = [];

    if (!isNameValid(insertAdFromUser)) {
      errors.push("Product name need to have at least 2 characteres");
    }

    if (!isDescriptionValid(insertAdFromUser)) {
      errors.push("Description of product need to have at least 3 characteres");
    }
    if (!isPriceValid(insertAdFromUser)) {
      errors.push("Price need to be higher than 1€");
    }

    function isNameValid(insertAdFromUser) {
      const name = insertAdFromUser.querySelector("#name");
      return name.value.length > 1 ? true : false;
    }

    function isDescriptionValid(insertAdFromUser) {
      const description = insertAdFromUser.querySelector("#description");
      return description.value.length > 3 ? true : false;
    }

    function isPriceValid(insertAdFromUser) {
      const price = insertAdFromUser.querySelector("#price");
      return price.value > 1 ? true : false;
    }

    function showErrors(errors) {
      for (let error of errors) {
        dispatchEventDOM(
          "error-notification",
          {
            message: error,
            type: "error",
          },
          insertAdFromUser,
        );
      }
    }

    showErrors(errors);

    if (errors.length === 0) {
      createAdFormSubmit(insertAdFromUser);
    }
  }

  function collectDataForm(insertAdFromUser) {
    const formData = new FormData(insertAdFromUser);

    return {
      name: formData.get("name"),
      image: formData.get("image"),
      description: formData.get("description"),
      status: formData.get("status"),
      price: formData.get("price"),
    };
  }

  async function createAdFormSubmit(insertAdFromUser) {
    try {
      loadSpinner("showSpinner", insertAdFromUser);
      debugger;
      const dataUserAdForm = collectDataForm(insertAdFromUser);

      await createAdvert(dataUserAdForm);
      dispatchEventDOM(
        "advert-created",
        {
          message: "Advert created",
          type: "success",
        },
        insertAdFromUser,
      );
      setTimeout(() => {
        window.location = "index.html";
      }, 2000);
    } catch (error) {
      dispatchEventDOM(
        "error-notification",
        {
          message: error,
          type: "error",
        },
        insertAdFromUser,
      );
    } finally {
      loadSpinner("hideSpinner", insertAdFromUser);
    }
  }
}
