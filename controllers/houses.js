// import packages
const express = require('express')
const users = require('../models/users')
const router = express.Router()
const async = require('hbs/lib/async')

// Modules

const Users = require('../models/users')
const Houses = require('../models/houses')

// Routes (views)

// GET /
router.get('/', async (req, res) => {
  try {
    // get all houses and .sort('-price')
    let houses = await Houses.find({})
    console.log(houses)
    res.render('houses/list', {user: req.user, houses})
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
router.get('/:id', async (req, res, next) => {
  try {
    // find house by id && populate host
    let house = await Houses.findById(req.params.id).populate('host')
    console.log(house)
    res.render('houses/one', {house: house, user: req.user})
  } catch (err) { next(err) }
})

// GET /:id/edit
router.get('/:id/edit', (req, res) => {
  res.render('houses/edit', {user: req.user})
})
// POST /
router.post('/', async (req, res, next) => {
  try {
    if (!req.isAuthenticated) {
      // if logged in, create a new house
      res.redirect('/auth/login')
    } else {
      // add the user to the house
      req.body.host = req.user._id  
      // create a new house
      let house = await Houses.create(req.body)   
      res.redirect(`/houses/${house._id}`)
    }
  } catch (err) { next(err) }
})
// PATCH /:id
router.patch('/:id', (req, res) => {})
// DELETE /:id
router.delete('/:id', (req, res) => {})

// export
module.exports = router
