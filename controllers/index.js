// import packages
const express = require('express')
const router = express.Router()

// Routes (views)

// GET /houses
router.get('/', (req, res) => {
  res.redirect('/houses')
})

// export
module.exports = router
