export function buildAddDetail(advert) {
  return `
  <div class="ad-detail">
  <h2>${advert.name}</h2>
    <img src="${advert.image}" />
    <p>${advert.description}</p>
    <p>${advert.status}: ${advert.price}€</p>
    </div>
  `;
}
