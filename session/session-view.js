export const buildSession = () => {
  return `<ul> 
            <a href="./login.html">Login</a>
            <a href="./signup.html">Signup</a>
    </ul>
    `;
};

export const buildAuthenticatedSession = () => {
  return `
    <button> Cerrar sesión </button> 
    <a href="advert-creation.html">Crear anuncio </a>`;
};
