import axios from "axios";

const API_URL = "/api/tickets/";

const createNote = async (noteText, ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const reponse = await axios.post(
    API_URL + ticketId + "/notes",
    { text: noteText },
    config
  );
  return reponse.data;
};

const getNotes = async (ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const reponse = await axios.get(API_URL + ticketId + "/notes", config);
  return reponse.data;
};

const noteService = {
  createNote,
  getNotes,
};
export default noteService;
