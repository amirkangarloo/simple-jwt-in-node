'use strict'

const express = require('express')
const router = express.Router()
const methodNotAllowed = require('../middlewares/method-not-allowed')
const {
    login,
    dashboard
} = require('../controllers')

router.post('/login', login)
router.get('/dashboard', dashboard)

// method not allowed handler (Error 405)
router.all('/login', methodNotAllowed)
router.all('/dashboard', methodNotAllowed)

module.exports = router