// import packages
const express = require('express')
const router = express.Router()

// views

// GET /houses
router.get('/', (req, res) => {
  res.send('/houses');
})

// export
module.exports = router
