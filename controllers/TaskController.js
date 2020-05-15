const { Task } = require('../models')

class TaskController {

    static async getAllTasks (req, res, next) {
        console.log(req.query, 'QUERY')
        const { location, date } = req.query
        try {
            let tasks
            if (location) tasks = await Task.findAll({where:{user_id: req.userData.id, location}})
            else if (date) tasks = await Task.findAll({where:{user_id: req.userData.id, date}})
            else tasks = await Task.findAll({where:{user_id: req.userData.id}})
            res.status(200).json(tasks)
        } catch (err) {
            next(err)
        }
    }

    static async getOneTask (req, res, next) {
        const { id } = req.params
        try {
            const task = await Task.findOne({where:{ id }})
            if (!task) throw ({ status: 404, msg: 'Task not found' })
            res.status(200).json(task)
        } catch (err) {
            next(err)
        }
    }

    static async createTask (req, res, next) {
        const { task, date, start, end, location } = req.body
        try {
            await Task.create({ task, date, start, end, location, user_id: req.userData.id })
            res.status(201).json({ success: true, msg: 'Task created' })
        } catch (err) {
            next(err)
        }
    }

}

module.exports = TaskController