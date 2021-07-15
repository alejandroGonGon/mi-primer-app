/* eslint-disable linebreak-style */

export async function getAnimes() {
  const response = await fetch('https://kitsu.io/api/edge/anime?filter[categories]=seinen');
  const responseJson = await response.json();
  return responseJson;
}
export async function getPeliculas() {
  const response = await fetch('http://localhost/phpMailer-ejercicio/code/apiPeliculas.php');
  const responseJson = await response.json();
  return responseJson;
}

export default {
  getAnimes, getPeliculas,
};
