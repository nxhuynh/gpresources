var express = require('express')

var router = express.Router()
var models = require('../../db/models/index')

router.get('/', (req, res) => {
  res.json({ message: 'horray welcome to our api!' })
})

router.post('/resource', (req, res) => {
  models.resource.create({
    name: req.body.name
  }).then((resource) => {
    res.json(resource)
  })
})

router.get('/resource', (req, res) => {
  models.resource.findAll({
    include: [
      {
        model: models.resource_state
      }
    ]
  }).then((resources) => {
    res.json(resources)
  })
})

module.exports = router
