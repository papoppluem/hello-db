const express = require('express')
const router = express.Router()
const roomsRoute = require('./modules/rooms/routes')

router.use('/rooms',roomsRoute)

module.exports = router