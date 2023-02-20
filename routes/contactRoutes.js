const express = require("express");
const {
  getContacts,
  postContact,
  getAContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactControllers");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();

router.use(validateToken);
router.route("/").get(getContacts);
router.route("/").post(postContact);
router.route("/:id").get(getAContact);
router.route("/:id").put(updateContact);
router.route("/:id").delete(deleteContact);

module.exports = router;
