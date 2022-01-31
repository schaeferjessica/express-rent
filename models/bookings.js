const mongoose = require('mongoose')

// bookings moodel
module.exports = mongoose.model('bookings', {
  author: {
    type: ObjectId,
    ref: 'users',
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  description: {
    type: String
  },
  house: {
    type: ObjectId,
    ref: 'house',
    required: true
  }
})

author
date
description
house