// import packages
const express = require('express')
const users = require('../models/users')
const router = express.Router()

// Modules

const Users = require('../models/users')
const Houses = require('../models/houses')

// Routes (views)

// GET /
router.get('/', (req, res) => {
  try {
    res.render('houses/list', {user: req.user})
  } catch (err) { next(err) }
})
// GET /create
router.get('/create', (req, res) => {
  try {
    res.render('houses/create', {user: req.user})
    if (!req.isAuthenticated()) { res.redirect('/auth/login')} else {  res.render('houses/create') }
  } catch (err) { next(err) }
})
// GET /:id
router.get('/:id', (req, res, next) => {
  try {
    let findHouseWithID = Houses.findOne({_id: req.params.id})
    findHouseWithID.then(house => {
      res.render('houses/one' , {user: req.user, house: house})
    }) 
  } catch (err) { next(err) }
})

// GET /:id/edit
router.get('/:id/edit', (req, res) => {
  res.render('houses/edit', {user: req.user})
})
// POST /
router.post('/', async (req, res, next) => {
  try {
    if (req.body) {
      const house = await Houses.create(req.body)
      res.redirect(`/houses/${house._id}`)
    } else {
      res.render('houses/create', { error: 'please fill out the form' })
    }
  } catch (err) { next(err) }
})
// PATCH /:id
router.patch('/:id', (req, res) => {})
// DELETE /:id
router.delete('/:id', (req, res) => {})

// export
module.exports = router
