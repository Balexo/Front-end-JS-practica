import { buildSpinner } from "./spinner-view.js";

export const spinnerController = (spinner) => {
  const showSpinner = () => {
    spinner.classList.add("active");
    spinner.innerHTML = buildSpinner(spinner);
  };

  const hideSpinner = () => {
    spinner.classList.remove("active");
    spinner.innerHTML = "";
  };

  return {
    showSpinner,
    hideSpinner,
  };
};
