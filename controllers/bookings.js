// import packages
const express = require('express')
const router = express.Router()

const async = require('hbs/lib/async');

// views

// POST /
router.post('/', (req, res) => {
  res.send('bookings')
})

// export
module.exports = router
