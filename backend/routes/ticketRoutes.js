const express = require("express");
const router = express.Router();
const {
  getTickets,
  createTicket,
  getTicket,
  updateTicket,
  deleteTicket,
} = require("../controllers/ticketController");
const { protect } = require("../middleware/authMiddleware");

// router.get("/", protect, getTickets);
// router.post("/", protect, createTicket);
router.route("/").get(protect, getTickets).post(protect, createTicket);

// router.get("/:id", protect, getTicket);
// router.delete("/:id", protect, deleteTicket);
// router.put("/:id", protect, updateTicket);
router
  .route("/:id")
  .get(protect, getTicket)
  .delete(protect, deleteTicket)
  .put(protect, updateTicket);
module.exports = router;
