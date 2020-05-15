const { Users } = require('../models')

//helpers
const { generateToken } = require('../helpers/jsonwebtoken')
const { verifyPassword } = require('../helpers/bcrypt')

class UserController {

    static async register (req, res, next) {
        const { username, email, password } = req.body
        try {
            const exist = await Users.findOne({where:{ email }})
            if (exist) throw ({ status: 400, msg: 'Email already registered' })
            const newUser = await Users.create({ username, email, password })
            const token = generateToken({ id: newUser.id })
            res.status(201).json({ token, user: { username: newUser.username, email: newUser.email }})
        } catch (err) {
            next(err)
        }
    }

    static async login (req, res, next) {
        const { email, password } = req.body
        try {
            const exist = await Users.findOne({where:{ email }})
            if (!exist) throw ({ status: 400, msg: 'Invalid email / password' })
            const checkPassword = verifyPassword(password, exist.password)
            if (!checkPassword) throw ({ status: 400, msg: 'Invalid email / password' })
            const token = generateToken({ id: exist.id })
            res.status(200).json({ token, user: { username: exist.username, email: exist.email }})
        } catch (err) {
            next(err)
        }
    }

}   

module.exports = UserController