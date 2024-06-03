export function buildAdvert(advert) {
  return `
      <a class="add" href="advert-detail.html?addId=${advert.id}">
      <h2>${advert.name}</h2>
      <p>${advert.image}</p>
      <p>${advert.description}</p>
      <p>${advert.status} : ${advert.price}</p>
      </a>
      `;
}

export function buildEmptyAdvert() {
  return " <p>There is no adverts to show </p>";
}
