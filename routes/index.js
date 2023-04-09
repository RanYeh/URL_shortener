const express = require('express')
const router = express.Router()

//-- 載入路由模組 
const home = require('./modules/home')
router.use('/', home)



module.exports = router