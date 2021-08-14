import httpService from "./httpService";
import variants from "../config/variants";

const apiUrl = variants.apiEndPoint + "tickets/";


export function getTickets(user_id) {
 return httpService.get(apiUrl, {params: {user_id: user_id}});
}

export function getTicket(ticket_id) {
  return httpService.get(apiUrl, {params: {ticket_id: ticket_id}});
}

export function saveTicket(ticket) {
    return httpService.post(apiUrl, ticket)
}


