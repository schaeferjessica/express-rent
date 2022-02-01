// import packages
// import packages
const express = require('express')
const router = express.Router()

const async = require('hbs/lib/async');

// Routes (views)

// GET /
router.get('/', (req, res) => {
  res.render('profile')
})
// PATCH /
router.patch('/', (req, res) => {})

// export
module.exports = router
