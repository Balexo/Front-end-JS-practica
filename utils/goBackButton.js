export function goBackButton(node) {
  debugger;
  const goBackButton = node.querySelector("#goBack");
  goBackButton.addEventListener("click", (event) => {
    event.preventDefault();
    window.history.back();
  });
}
