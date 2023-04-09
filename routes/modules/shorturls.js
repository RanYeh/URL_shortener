const express = require('express')
const router = express.Router()

const Record = require('../../models/record')
const genGarbledChars = require('../../gen-garbled-chars')

router.post('/', (req, res) => {
// 新增短網址
  if (!req.body.originUrl) return res.redirect('/')

  const originUrl = req.body.originUrl.trim()

  // 檢查輸入的網址是否存在，若否則建立一筆新資料
  Record.findOne({ originUrl: originUrl })
    .lean()
    .then(data => {
      if (data) {
        res.render('result', { url: `http://localhost:3000/${data.shortUrl}` })
      } else {
        let garbledChars = genGarbledChars(5)
        Record.create({ originUrl, shortUrl: garbledChars })
          .then(res.render('result', { url: `http://localhost:3000/${garbledChars}` }))
          .catch(error => console.error(error))
      }
    })
    .catch(error => console.error(error))
})

module.exports = router