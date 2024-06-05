import { createAdvert } from "./advert-creation-model.js";
import { goBackButton } from "../utils/goBackButton.js";

export function createAdvertController(insertAdFromUser) {
  goBackButton(insertAdFromUser);
  debugger;
  insertAdFromUser.addEventListener("submit", (event) => {
    event.preventDefault();

    handleFieldsAdFormSubmit(insertAdFromUser);
  });

  function handleFieldsAdFormSubmit(insertAdFromUser) {
    let errors = [];

    if (!isNameValid(insertAdFromUser)) {
      debugger;
      errors.push("Product name need to have at least 2 characteres");
    }

    if (!isDescriptionValid(insertAdFromUser)) {
      debugger;
      errors.push("Description of product need to have at least 3 characteres");
    }
    if (!isPriceValid(insertAdFromUser)) {
      debugger;
      errors.push("Price need to be higher than 1€");
    }

    showErrors(errors);

    if (errors.length === 0) {
      debugger;
      createAdFormSubmit(insertAdFromUser);
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
        alert(error);
      }
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
      const dataUserAdForm = collectDataForm(insertAdFromUser);

      await createAdvert(dataUserAdForm);
      debugger;
      setTimeout(() => {
        window.location = "index.html";
      }, 2000);
    } catch (error) {
      alert(error);
    }
  }
}
