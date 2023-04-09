const express = require('express')
const router = express.Router()

const Record = require('../../models/record')

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/:shortUrl', (req, res) => {
  const shortUrl = req.params.shortUrl

  Record.findOne({shortUrl})
    .lean()
    .then(data => {
      if (!data) {
        const errorMsg = `Can't find the URL.`
        return res.render('result', { errorMsg })
      } else {
        return res.redirect(data.originUrl)
      }
    })
    .catch(error => console.error(error))
})


module.exports = router