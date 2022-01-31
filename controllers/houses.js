// import packages
const express = require('express')
const router = express.Router()

const async = require('hbs/lib/async');

// views

// GET /
router.get('/', (req, res) => {
  res.render('houses/list')
})
// GET /create
router.get('/create', (req, res) => {
  res.render('houses/create')
})
// GET /:id
router.get('/:id', (req, res) => {
  res.render('houses/one')
})
// GET /:id/edit
router.get('/:id/edit', (req, res) => {
  res.render('houses/edit')
})
// POST /
router.post('/', (req, res) => {})
// PATCH /:id
router.patch('/:id', (req, res) => {})
// DELETE /:id
router.delete('/:id', (req, res) => {})

// export
module.exports = router
