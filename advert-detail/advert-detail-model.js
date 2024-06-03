function parseAdds(advert) {
  return {
    id: advert.id,
    name: advert.name,
    image: advert.image,
    description: advert.description,
    status: advert.status,
    price: advert.price,
  };
}

export async function getAddDetail(addId) {
  const url = `http://localhost:8000/api/adverts/${addId}`;

  let add = {};
  try {
    const response = await fetch(url);
    const data = await response.json();
    add = parseAdds(data);
    return add;
  } catch (error) {
    throw new Error("Error obteniendo el anuncio" + error.message);
  }
}
