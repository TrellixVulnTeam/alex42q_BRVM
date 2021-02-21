const express = require("express")
const router = express.Router()

const LogoutController = require("../controllers/LogoutController")

router.get('/logout', LogoutController.getLogout)

module.exports = router