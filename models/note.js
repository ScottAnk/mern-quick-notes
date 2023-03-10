const mongoose = require('mongoose')

const noteSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamp: true,
  }
)

const Note = mongoose.model('Note', noteSchema)

module.exports = Note
