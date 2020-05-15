const router = require('express').Router()
const UserController = require('../controllers/UserController')

// POST
// /user/register
// Registering new user
router.post('/register', UserController.register)

// POST
// /user/login
// Handle user login
router.post('/login', UserController.login)

module.exports = router