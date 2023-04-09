//-- Include packages & define related varibles
const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')

const routes = require('./routes')
require('./config/mongoose') // Connect to DB

const app = express()
const port = 3000

//-- Set template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

//-- Use bodyParser
app.use(express.urlencoded({ extended: true }))

//-- Use methodOverride
app.use(methodOverride('_method'))

//-- Set static files
app.use(express.static('public'))

//-- Set routes
app.use(routes)

//-- Start and listen on the express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})