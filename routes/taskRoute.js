const router = require('express').Router()
const TaskController = require('../controllers/TaskController')

//auths
const { authentication } = require('../middlewares/auth')

// GET
// /task
// Get all task for that specific user || Can be queried based on location and date
router.get('/', authentication, TaskController.getAllTasks)

// GET
// /task/:id
// Get one specific task
router.get('/:id', authentication, TaskController.getOneTask)

// POST
// /task
// Post a new task for that user
router.post('/', authentication, TaskController.createTask)

module.exports = router