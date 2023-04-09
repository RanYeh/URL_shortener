const express = require('express')
const router = express.Router()

//-- 載入路由模組 
const home = require('./modules/home')
router.use('/', home)

const shorturls = require('./modules/shorturls')
router.use('/shorturls', shorturls)

module.exports = router