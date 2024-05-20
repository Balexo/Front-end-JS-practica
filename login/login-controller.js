import { loginUser } from "./login-model.js";
import { loadSpinner } from "../utils/loadSpinner.js";
import { dispatchEventDOM } from "../utils/dispatchEventDOM.js";

export const loginController = (loginForm) => {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    submitLogin(loginForm);
  });
};

const submitLogin = async (loginForm) => {
  const { email, password } = getLoginData(loginForm);

  try {
    loadSpinner("spinner-login-on", loginForm);
    const jwt = await loginUser(email, password);
    localStorage.setItem("token", jwt);
    dispatchEventDOM(
      "login-correctly",
      {
        message: "Login correctly!",
        type: "success",
      },
      loginForm,
    );
    setTimeout(() => {
      window.location = "index.html";
    }, "2000");
  } catch (error) {
    dispatchEventDOM(
      "error-login",
      { message: error, type: "error" },
      loginForm,
    );
  } finally {
    loadSpinner("spinner-login-off", loginForm);
  }
};

const getLoginData = (loginForm) => {
  const formData = new FormData(loginForm);
  const email = formData.get("email");
  const password = formData.get("password");

  return {
    email: email,
    password: password,
  };
};
