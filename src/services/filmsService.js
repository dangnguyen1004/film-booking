import httpService from "./httpService";
import variants from '../config/variants'

const apiUrl = variants.apiEndPoint + "films/";

export function getFilms() {
  return httpService.get(apiUrl);
}

export function getFilm(film_id) {
  return httpService.get(apiUrl, { params: { id: film_id } });
}

export function getHalls() {
  return httpService.get(`halls/`);
}

export function getShows() {
  return httpService.get(`${variants.apiEndPoint}shows/`);
}

export function getShowsOfFilm(film_id) {
  return httpService.get(`${variants.apiEndPoint}shows/`, { params: { film_id: film_id } });
}
