// import packages
const express = require('express')
const users = require('../models/users')
const router = express.Router()

// Modules

const Users = require('../models/users')

// Routes (views)

// GET /
router.get('/', (req, res) => {
  try {
    res.render('houses/list', {user: req.user})
  } catch (err) { next(err) }
})
// GET /create
router.get('/create', (req, res) => {
  if (!req.isAuthenticated()) { res.redirect('/auth/login') } else {  res.render('houses/create') }
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
