export async function loginUser(email, password) {
  const url = "http://localhost:8000/auth/login";

  let response;
  try {
    debugger;
    response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ username: email, password: password }),
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    if (response.ok) {
      return data.accessToken;
    }
  } catch (error) {
    if (error.message) {
      throw error.message;
    } else {
      throw error;
    }
  }
}
