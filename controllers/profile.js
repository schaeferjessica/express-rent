// import packages
// import packages
const express = require('express')
const router = express.Router()

const async = require('hbs/lib/async');

// Modules

const Users = require('../models/users')
const Houses = require('../models/houses')

// Routes (views)

// GET /
router.get('/', async (req, res) => {
  //  all houses that are listed by the user
  let houses = await Houses.find({host: req.user._id})
  res.render('profile', {user: req.user, houses})
})
// PATCH /
router.patch('/', async (req, res, next) => {
  // Update User Profile
  try {
    if(!req.isAuthenticated()) {
      res.redirect('/auth/login')
    } else {    
      let user = await Users.findByIdAndUpdate(req.user._id, req.body, {new: true})
       req.login(user, err => {
        if (err) {  next(err) } else {  res.redirect('/profile') }
      })
    }
    
  } catch (err) { next(err) }   
})

// export
module.exports = router
