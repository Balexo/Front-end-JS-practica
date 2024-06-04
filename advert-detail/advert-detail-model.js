function parseAdds(advert) {
  return {
    id: advert.id,
    name: advert.name,
    image: advert.image,
    description: advert.description,
    status: advert.status,
    price: advert.price,
    user: advert.userId,
  };
}

function parseUser(user) {
  return {
    id: user.id,
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

export async function getUserData(token) {
  const url = `http://localhost:8000/auth/me`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();

    return parseUser(data);
  } catch (error) {
    throw new Error("There is a problem getting user's ID");
  }
}

export const deleteAd = async (addId, token) => {
  const url = `http://localhost:8000/api/adverts/${addId}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message);
    }
  } catch (error) {
    throw new Error("Error removing advert");
  }
};
