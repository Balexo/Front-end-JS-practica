export const buildSession = () => {
  return `<ul> 
        <li>
            <a href="./login.html">Login</a>
            <a href="./signup.html">Signup</a>
        </li>
    </ul>
    `;
};

export const buildAuthenticatedSession = () => {
  return `
    <button> Cerrar sesión </button> 
    <a href="advert-creation.html">Crear anuncio </a>`;
};