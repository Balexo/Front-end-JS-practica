export const createAdvert = async (advert) => {
  const url = "http://localhost:8000/api/adverts";
  const token = localStorage.getItem("token");

  const body = {
    name: advert.name,
    image: advert.image,
    description: advert.description,
    status: advert.status,
    price: advert.price,
  };

  let response;
  try {
    response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message);
    }
  } catch (error) {
    if (error.message) {
      throw error.message;
    } else {
      throw error;
    }
  }
};
