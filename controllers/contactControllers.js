const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc GET all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

//@desc POST create a contacts
//@route POST /api/contacts
//@access private
const postContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are required!");
  }

  const contact = await Contact.create({
    name,
    email,
    phone,
  });

  res.status(200).json(contact);
});

//@desc GET specific contact
//@route GET /api/contacts/:id
//@access private
const getAContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found!");
  }
  res.status(200).json(contact);
});

//@desc PUT update contacts
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found!");
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedContact);
});

//@desc DELETE one contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found!");
  }

  await contact.remove();
  res.status(200).json(contact);
});

module.exports = {
  getContacts,
  postContact,
  getAContact,
  updateContact,
  deleteContact,
};
