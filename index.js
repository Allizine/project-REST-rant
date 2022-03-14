// Modules and Globals
require('dotenv').config()
const express = require('express')
const res = require('express/lib/response')
const router = require('./controllers/places')
const app = express()

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// Controllers & Routes
//Places Page
app.use('/places', require('./controllers/places'))

//Home Page
app.get('/', (req, res) => {
    res.render('home')
})
//404 Page
app.get('*', (req, res) => {
    res.render('error404')
})

// Listen for Connections
app.listen(process.env.PORT)


