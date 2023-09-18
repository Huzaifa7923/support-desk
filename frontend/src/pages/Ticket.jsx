import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Modal from "react-modal";

import { getTicket, closeTicket } from "../features/tickets/ticketSlice";
import {
  getNotes,
  reset as notesReset,
  createNote,
} from "../features/notes/noteSlice";
import NoteItem from "../components/NoteItem";
import { useEffect } from "react";
import BackButton from "../components/BackButton";
import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";

//for the modal
const customStyles = {
  content: {
    width: "600px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    position: "relative",
  },
};

Modal.setAppElement("#root"); //index.html

function Ticket() {
  const { ticket, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.tickets
  );
  const { notes, isLoading: notesIsLoading } = useSelector(
    (state) => state.notes
  );

  //useState() for local state
  const [modalIsOpen, setModaLIsOpen] = useState(false);
  const [noteText, setNoteText] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { ticketId } = useParams();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getTicket(ticketId));
    dispatch(getNotes(ticketId));
  }, [message, isError, ticketId, getNotes]);
  //dispatch -> not dependecyy otherwise never ending loop
  const onTicketClose = async () => {
    // console.log(ticket.status);
    // console.log("1");
    dispatch(closeTicket(ticketId));
    toast.success("Ticket close");
    // console.log("2");
    // console.log(ticket.status);
    navigate("/tickets");
  };

  const openModal = () => setModaLIsOpen(true);
  const closeModal = () => setModaLIsOpen(false);

  const OnNoteSubmit = (e) => {
    e.preventDefault();
    dispatch(createNote({ noteText, ticketId }));
    closeModal();
  };
  // console.log(notes);
  if (isError) {
    return <h3>Something went wrong </h3>;
  }
  return (
    <div className="ticket-page">
      <header className="ticket-header">
        <BackButton url="/tickets"></BackButton>
        <h2>
          Ticket ID:{ticket._id}
          <span className={`status status-${ticket.status}`}>
            {ticket.status}
          </span>
        </h2>
        <h3>
          Date Submitted:{new Date(ticket.createdAt).toLocaleString("en-IN")}
        </h3>
        <h3>Product: {ticket.product}</h3>
        <hr />
        <div className="ticket-desc">
          <h3>Description of Issue</h3>
          <p>{ticket.description}</p>
        </div>
        <h2>Notes</h2>
        {notes &&
          notes.map((note) => <NoteItem key={note._id} note={note}></NoteItem>)}
      </header>
      {ticket.status !== "closed" && (
        <button onClick={openModal} className="btn">
          <FaPlus />
          Add Note
        </button>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add Note"
      >
        <h2>Add Notes</h2>
        <button className="btn-close" onClick={closeModal}>
          X
        </button>

        <form onSubmit={OnNoteSubmit}>
          <div className="form-group">
            <textarea
              name="noteText"
              id="noteText"
              className="form-control"
              placeholder="note-text"
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </Modal>
      {ticket.status !== "closed" && (
        <button className="btn btn-block btn-danger" onClick={onTicketClose}>
          Close Ticket
        </button>
      )}
    </div>
  );
}

export default Ticket;
