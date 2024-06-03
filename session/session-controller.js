import { buildSession, buildAuthenticatedSession } from "./session-view.js";

export const sessionController = (nav) => {
  if (userIsLoggedIn()) {
    nav.innerHTML = buildAuthenticatedSession();
    const logoutButton = nav.querySelector("button");
    logoutButton.addEventListener("click", () => {
      localStorage.removeItem("token");
      sessionController(nav);
    });
  } else {
    nav.innerHTML = buildSession();
  }
};

function userIsLoggedIn() {
  return localStorage.getItem("token");
}
