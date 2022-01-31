// import packages
const express = require('express')
const router = express.Router()

const async = require('hbs/lib/async');


// views

//GET /login
router.get('/login', (req, res) => {
  res.render('login')
})
//GET /signup
router.get('/signup', (req, res) => {
  res.render('signup')
})
//POST /login
router.post('/login', (req, res) => {
  res.send('login')
})
//POST /signup
router.post('/signup', (req, res) => {
  res.send('signup')
})
//GET /logout
router.get('/logout', (req, res) => {
  res.send('logout')
})

// export module
module.exports = router