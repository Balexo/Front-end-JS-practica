export function goBackButton(node) {
  const goBackButton = node.querySelector("#goBack");
  goBackButton.addEventListener("click", (event) => {
    event.preventDefault();
    window.history.back();
  });
}
