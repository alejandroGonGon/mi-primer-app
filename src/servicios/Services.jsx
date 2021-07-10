/* eslint-disable linebreak-style */

export async function getAnimes() {
  const response = await fetch('https://kitsu.io/api/edge/anime?filter[categories]=seinen');
  const responseJson = await response.json();
  return responseJson;
}
/*
export async function postPelicula() {
  const tittle = document.getElementById('titulo-pelicula');
  const url = document.getElementById('url-pelicula');
  const response =
}
*/
export default {
  getAnimes,
};
