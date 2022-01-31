// import packages
const express = require('express')
const router = express.Router()

// views

// GET /houses
router.get('/', (req, res) => {
  res.redirect('/houses')
})

// export
module.exports = router
