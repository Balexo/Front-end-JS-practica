import { createAdvert } from "./advert-creation-model.js";

export function createAdvertController(createAd) {
  createAd.addEventListener("submit", (event) => {
    event.preventDefault();

    handleFieldsAdFormSubmit(createAd);
  });

  function handleFieldsAdFormSubmit(createAd) {
    let errors = [];

    if (!isNameValid(createAd)) {
      debugger;
      errors.push("Product name need to have at least 2 characteres");
    }

    if (!isDescriptionValid(createAd)) {
      debugger;
      errors.push("Description of product need to have at least 3 characteres");
    }
    if (!isPriceValid(createAd)) {
      debugger;
      errors.push("Price need to be higher than 1€");
    }

    showErrors(errors);

    if (errors.length === 0) {
      debugger;
      createAdFormSubmit(createAd);
    }

    function isNameValid(createAd) {
      const name = createAd.querySelector("#name");
      return name.value.length > 1 ? true : false;
    }

    function isDescriptionValid(createAd) {
      const description = createAd.querySelector("#description");
      return description.value.length > 3 ? true : false;
    }

    function isPriceValid(createAd) {
      const price = createAd.querySelector("#price");
      return price.value > 1 ? true : false;
    }

    function showErrors(errors) {
      for (let error of errors) {
        alert(error);
      }
    }
  }

  function collectDataForm(createAd) {
    const formData = new FormData(createAd);

    return {
      name: formData.get("name"),
      image: formData.get("image"),
      description: formData.get("description"),
      status: formData.get("status"),
      price: formData.get("price"),
    };
  }

  async function createAdFormSubmit(createAd) {
    try {
      const dataUserAdForm = collectDataForm(createAd);

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
