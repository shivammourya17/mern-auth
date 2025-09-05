const router = require("express").Router();
const { signup, login, profile } = require("../controllers/authController");
const auth = require("../middleware/authMiddleware");

router.post("/signup", signup);
router.post("/login", login);
router.get("/profile", auth, profile);

module.exports = router;
