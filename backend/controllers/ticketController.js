const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Ticket = require("../models/ticketModel");

// @desc get user tickets
// @route GET /api/tickets
// @access private
const getTickets = asyncHandler(async (req, res) => {
  console.log("1");
  const user = await User.findById(req.user.id);
  if (!user) {
    console.log("2");
    res.status(401);
    throw new Error("User not found");
  }

  const tickets = await Ticket.find({ user: req.user.id });
  console.log("3");
  res.status(200).json(tickets);
});

//@desc get ticket
//@route GET api/tickets/:id
//@access private
const getTicket = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) {
    res.status(404);
    throw new Error("Ticket not found");
  }

  if (ticket.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not Authorised");
  }
  res.status(200).json(ticket);
});

// @desc delete ticket
// @route DELETE api/tickets/:id
//access private

const deleteTicket = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  const ticket = await Ticket.findByIdAndDelete(req.params.id);
  if (!ticket) {
    throw new Error("no ticket found ");
  } else {
    res.status(200).json({ success: true });
  }
});

// @desc update ticket
// @route PUT  api/tickets/:id
//access private
const updateTicket = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) {
    res.status(401);
    throw new Error("no ticket found ");
  }
  if (ticket.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not Authorised");
  }
  const updatedTicket = await Ticket.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  console.log("in backend");
  console.log(updatedTicket);
  res.status(200).json(updatedTicket);
});

// @desc  create user tickets
// @route POST /api/tickets
// @access private

const createTicket = asyncHandler(async (req, res) => {
  //   console.log(req.body);

  if (!req.body.description || !req.body.product) {
    res.status(400);
    throw new Error("Please add product and its description");
  }
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const ticket = await Ticket.create({
    product: req.body.product,
    description: req.body.description,
    user: req.user.id,
    status: "new",
  });
  res.status(201).json(ticket);
});

module.exports = {
  getTickets,
  createTicket,
  getTicket,
  deleteTicket,
  updateTicket,
};
