const express = require("express");
const { resgisterController, loginController, logoutController } = require("../controllers/authController");
const { JsConverterController, ScifiImageController } = require("../controllers/openaiController");

const router = express.Router();
//routes

//REGISTER
router.post("/register", resgisterController);
//LOGIN
router.post("/login", loginController);
//LOGOUT
router.post("/logout", logoutController);
router.post('/jsconverter',JsConverterController);
router.post('/scifiimage',ScifiImageController);
module.exports = router;