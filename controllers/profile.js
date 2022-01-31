// import packages
// import packages
const express = require('express')
const router = express.Router()

const async = require('hbs/lib/async');

// views

// GET /
router.get('/', (req, res) => {
  res.send('profile')
})
// PATCH /
router.patch('/', (req, res) => {
  res.send('profile')
})

// export
module.exports = router
