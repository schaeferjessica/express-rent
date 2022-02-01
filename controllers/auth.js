// import packages
const express = require('express')
const async = require('hbs/lib/async')
const router = express.Router()

// Modules

const Users = require('../models/users')

// Routes (views)

//GET /login
router.get('/login', (req, res, next) => {
  try {
    res.render('login')
  } catch (err) { next(err) }
})
//GET /signup
router.get('/signup', (req, res) => {
  res.render('signup')
})
//POST /login
router.post('/login', async (req, res, next) => {
  try {
    if (req.body.email && req.body.password) {
      const user = await Users.findOne({ email: req.body.email })
      if (user) {
        if (user.password === req.body.password) {
          req.session.user = user
          res.redirect('/')
        } else {
          res.render('login', { error: 'Incorrect password'})
        }
      } else {
        res.render('login', { error: 'User not found' })
      }
    } else {
      res.render('login', { error: 'Please enter an email and password' })
    }
  } catch (err) { next(err) }
})
//POST /signup
router.post('/signup', (req, res) => {
  try {
    if (req.body.name && req.body.url && req.body.email && req.body.password) {
      Users.create({
        name: req.body.name,
        url: req.body.url,
        email: req.body.email,
        password: req.body.password
      })
      .then(user => {
        req.session.user = user
        res.redirect('/')
      })
    } else {
      res.render('signup', { error: 'Please enter an email and password' })
    }
  } catch (err) { next(err) }
})
//GET /logout
router.get('/logout', (req, res) => {
  try {
    req.session.destroy(err => {
      if (err) {
        next(err)
      }
    })
    res.redirect('/')
    res.clearCookie('connect.sid')
  }  catch (err) { next(err) }
})

// export module
module.exports = router