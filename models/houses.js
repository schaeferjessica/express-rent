const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

// houses moodel

module.exports = mongoose.model('houses', {
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  location: {
    type: String,
    required: true
  },
  photos: [
    {
      type: String,
      required: true
    },
  ],
  price: {
    type: Number,
    required: true
  },
  rooms: {
    type: Number,
    required: true
  },
  host: {
    type: ObjectId,
    ref: 'users',
    required: true
  }
})