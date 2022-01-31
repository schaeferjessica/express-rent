// import packages
// import packages
const express = require('express')
const router = express.Router()

const async = require('hbs/lib/async');

// views

// GET /
router.get('/', (req, res) => {
  res.render('profile')
})
// PATCH /
router.patch('/', (req, res) => {
  res.render('profile')
})

// export
module.exports = router
