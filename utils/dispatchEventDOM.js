export function dispatchEventDOM(eventName, data, element) {
  const event = new CustomEvent(eventName, {
    detail: data,
  });
  element.dispatchEvent(event);
}
