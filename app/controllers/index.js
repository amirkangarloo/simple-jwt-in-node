'use strict'

const CustomeAPIError = require('../errors/custom-error')
const jwt = require('jsonwebtoken')

exports.login = async (req, res, next) => {
    const {
        username,
        password
    } = req.body

    if (!username || !password) {
        throw new CustomeAPIError('username or password is incorrect', 403)
    }

    const id = new Date().getDate()
    const token = jwt.sign({
        id,
        username
    },
    process.env.APP_SECRET,
    {
        expiresIn: '10d'
    })

    res.status(200).send({
        msg: 'user create',
        token
    })
}

exports.dashboard = async (req, res, next) => {
    const luckyNumber = Math.floor(Math.random() * 100)
        res.status(200).send({
            msg: `Hello ${req.user.username}`,
            secret: `Here is your authorized data, you lucky number is ${luckyNumber}`
        })

}