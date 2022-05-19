'use strict'

exports.login = async (req, res, next) => {
    res.send('Fack login/Register/Signup Route')
}

exports.dashboard = async (req, res, next) => {
    const luckyNumber = Math.floor(Math.random()*100)
    res. status(200).send({
        msg: "Hello Amir",
        secret: `Here is your authorized data, you lucky number is ${luckyNumber}`
    })
}