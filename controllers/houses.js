// import packages
const express = require('express')
const users = require('../models/users')
const router = express.Router()
const async = require('hbs/lib/async')
const moment = require('moment')

// Modules

const Users = require('../models/users')
const Houses = require('../models/houses')
const Bookings = require('../models/bookings')

// Routes (views)

// GET /
router.get('/', async (req, res) => {
  try {
    //const houses = await Houses.find({})
    let obj = (req.query)
    for (p in obj) {
      if(`${obj[p]}` == "") {
        delete obj[p]
      }
    }
    // default query
    let query = { $and: [{}, obj] }
    for (p in obj) { 
      // add query for each property
      query[`${p}`] = obj[`${p}`]
    }
    let houses = await Houses.find(query)
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
    res.render('houses/one', {house: house, user: req.user})
    if (req.user){
      booking = await Bookings.findOne({house: req.params.id, user: req.user._id}).lean() 
      if (booking) { res.render('houses/one', {house: house, user: req.user, booking: booking})} 
    }
    let newDate = moment(booking.date).format('MMMM Do YYYY, h:mm:ss a')
    console.log(newDate)
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
router.delete('/:id', async (req, res) => {
  if(!req.isAuthenticated()) {
    res.redirect('/auth/login')
  } else {
    await Houses.findByIdAndDelete(req.params.id)
    res.redirect('/profile')
  }
})

// export
module.exports = router
