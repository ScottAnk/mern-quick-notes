const express = require('express')
const router = express.Router()

const ensureLoggedIn = require('../../config/ensureLoggedIn')

const Note = require('../../models/note')

router.post('/', ensureLoggedIn, (req, res, next) => {
  const noteData = { ...req.body.note, user: req.user._id }
  Note.create(noteData)
    .then((note) => res.json(note))
    .catch(next)
})

router.get('/', ensureLoggedIn, (req, res, next) => {
  Note.find({ user: req.user._id })
    .then(function (note) {
      return res.json(note)
    })
    .catch(next)
})

module.exports = router
