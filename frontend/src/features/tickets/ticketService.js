import axios from "axios";
import ticketSlice from "./ticketSlice";

const API_URL = "/api/tickets";

const createTicket = async (ticketData) => {
  const response = await axios.post(API_URL, ticketData);
  if (response.data) {
  }
};

export const ticketService = { createTicket };
