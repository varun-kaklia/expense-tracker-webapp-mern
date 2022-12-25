const express = require('express')
const { loginController, registerContoller } = require('../controllers/userController')

const router = express.Router()

router.post('/login',loginController)

router.post('/register',registerContoller)

module.exports = router