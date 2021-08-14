import httpService from "./httpService";
import variants from "../config/variants";

const apiUrl = variants.apiEndPoint + "seats/";

export function getSeats(ticket_id) {
  return httpService.get(apiUrl, { params: { ticket_id } });
}
