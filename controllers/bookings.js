// import packages
const express = require('express')
const async = require('hbs/lib/async')
const router = express.Router()

// Modules

const Bookings = require('../models/bookings')

// Routes (views)

// POST /
router.post('/', async (req, res, next) => {
  // create a new boooking and save it to the database
  let booking = new Bookings(req.body)
  try {
    await booking.save()
    res.redirect('/')
  } catch (err) { next(err) }
})


// export
module.exports = router
