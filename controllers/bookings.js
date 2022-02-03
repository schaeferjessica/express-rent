// import packages
const express = require('express')
const async = require('hbs/lib/async')
const router = express.Router()

// Modules

const Bookings = require('../models/bookings')
const Users = require('../models/users')

// Routes (views)

// POST /
router.post('/', async (req, res, next) => {
  try {
    if (!req.isAuthenticated()) {
      res.redirect('/auth/login')
    } else {
    let booking = await Bookings.create(req.body)
    booking.author = req.user._id
    booking.house = req.body.house
    await booking.save()
    res.redirect('/houses/${house._id}')
    }
  } catch (err) { next(err) }

})


// export
module.exports = router
