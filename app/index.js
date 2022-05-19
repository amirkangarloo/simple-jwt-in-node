'use strict'

const express = require('express')
const app = express()

const notFoundMiddleware = require('./middlewares/not-found')
const errorHandlerMiddleware = require('./middlewares/error-handler')
const { model } = require('mongoose')

// middleware
app.use(express.static('public'))
app.use(express.json())

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


module.exports = async (port) => {
    try {
        app.listen(port, () => {
            console.log(`Server is listennong on port ${port}...`);
        })
    } catch (error) {
        console.log(error);
    }
}