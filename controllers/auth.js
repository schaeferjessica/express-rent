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
router.post('/login', (req, res) => {})
//POST /signup
router.post('/signup', (req, res) => {})
//GET /logout
router.get('/logout', (req, res) => {})

// export module
module.exports = router