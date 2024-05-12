export async function createUser(email, password) {
  const url = "http://localhost:8000/auth/register";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: email, password: password }),
  });
  if (!response.ok) {
    throw new Error("Error en la creación de usuario");
  }
}
