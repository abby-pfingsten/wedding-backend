const express = require("express");
const router = express.Router();

// const auth = require("../middleware/auth");
// const multer = require("../middleware/multer-config");

const guestCtrl = require("../controllers/guest");

router.get("/", guestCtrl.getAllGuests);

module.exports = router;
