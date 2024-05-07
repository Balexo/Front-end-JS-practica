export function builAdvert(advert) {
  return `
    <p>${advert.name}</p>
    <p>${advert.image}</p>
    <p>${advert.description}</p>
    <p>${advert.status}: ${advert.price}</p>
    `;
}
