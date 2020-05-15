const { verifyToken } = require('../helpers/jsonwebtoken')

const authentication = (req, res, next) => {
    const { token } = req.headers
    try {
        const userData = verifyToken(token)
        req.userData = userData
        next()
    } catch (err) {
        next(err)
    }
}

module.exports = { authentication }