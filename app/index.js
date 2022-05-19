'use strict'

const express = require('express')
const app = express()

const notFoundMiddleware = require('./middlewares/not-found')
const errorHandlerMiddleware = require('./middlewares/error-handler')

const Routers = require('./routers')

// middleware
app.use(express.static('public'))
app.use(express.json())

// Router
app.use('/api/v1', Routers)

// Error handlers
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