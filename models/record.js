const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recordSchema = new Schema({
  originUrl: {
    type: String,
    required: true
  },
  shortUrl: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Record', recordSchema)