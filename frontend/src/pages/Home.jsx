import { Link } from "react-router-dom";
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";
function home() {
  return (
    <>
      <section className="heading">
        <h1>What do you need with?</h1>
        <p>Please choose from option below</p>
      </section>

      <Link to="/new-ticket" className="btn btn-reverse btn-block">
        <FaQuestionCircle />
        Create new ticket
      </Link>
      <Link to="/tickets" className="btn btn-block">
        <FaTicketAlt />
        View My Tickets
      </Link>
    </>
  );
}

export default home;
