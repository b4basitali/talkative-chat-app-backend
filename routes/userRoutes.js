const asyncHandler = require("express-async-handler");
const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, asyncHandler(allUsers));
router.route("/").post(asyncHandler(registerUser));
router.post("/login", asyncHandler(authUser));

module.exports = router;
