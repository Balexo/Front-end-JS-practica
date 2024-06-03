export async function parseAdds(data) {
  return data.map((data) => ({
    id: data.id,
    name: data.name,
    image: data.image,
    description: data.description,
    status: data.status,
    price: data.price,
  }));
}

export async function getAdds() {
  const url = "http://localhost:8000/api/adverts";

  let adverts = [];
  try {
    const response = await fetch(url);
    const data = await response.json();
    adverts = parseAdds(data);
  } catch (error) {
    throw new Error("Error obteniendo los anuncions");
  }
  return adverts;
}
