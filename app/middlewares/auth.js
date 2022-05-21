'use strict'

const CustomeAPIError = require('../errors/custom-error')
const jwt = require('jsonwebtoken')

const authenticationMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new CustomeAPIError('No token provided', 401)
    }

    const [, token] = authHeader.split(' ')
    try {
        const decode = jwt.verify(token, process.env.APP_SECRET)
        const {
            id,
            username
        } = decode
        req.user = {
            id,
            username
        }
        next()
    } catch (error) {
        throw new CustomeAPIError('Not Authorized to access this route', 401)
    }
}

module.exports = authenticationMiddleware