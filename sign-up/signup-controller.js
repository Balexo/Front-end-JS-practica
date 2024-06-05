import { createUser } from "./signup-model.js";
import { dispatchEventDOM } from "../utils/dispatchEventDOM.js";
import { loadSpinner } from "../utils/loadSpinner.js";
import { goBackButton } from "../utils/goBackButton.js";

export function signupController(loginForm) {
  goBackButton(loginForm);
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    loadSpinner("show-spinner", loginForm);
    handleSignUpForSubmit(loginForm);
    loadSpinner("hide-spinner", loginForm);
  });
}

async function handleSignUpForSubmit(loginForm) {
  let errors = [];

  if (!validateEmail(loginForm)) {
    errors.push("El formato del correo no es correcto");
  }

  if (!validatePassword(loginForm)) {
    errors.push("Las contraseñas no son iguales");
  }

  showErrors(errors);

  if (errors.length === 0) {
    registerUser(loginForm);
  }

  function validateEmail(loginForm) {
    const email = loginForm.querySelector("#email");
    const regex = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );

    return regex.test(email.value);
  }

  function validatePassword(loginForm) {
    const password = loginForm.querySelector("#password");
    const passwordConfirmation = loginForm.querySelector(
      "#password-confirmation",
    );

    return password.value === passwordConfirmation.value;
  }

  function showErrors() {
    errors.forEach((error) => {
      dispatchEventDOM(
        "error-signup",
        {
          message: error,
          type: "error",
        },
        loginForm,
      );
    });
  }
}

async function registerUser(loginForm) {
  const email = loginForm.querySelector("#email");
  const password = loginForm.querySelector("#password");

  try {
    await createUser(email.value, password.value);
    dispatchEventDOM(
      "signup-correctly",
      {
        message: "User created correctly",
        type: "success",
      },
      loginForm,
    );
    setTimeout(() => {
      window.location.href = "./login.html";
    }, 3000);
  } catch (error) {
    dispatchEventDOM(
      "error-signup",
      {
        message: error,
        type: "error",
      },
      loginForm,
    );
  }
}
