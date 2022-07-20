const router = require('express').Router()
const places = require("../models/places.js");

router.get('/', (req, res) => {
    res.render('places/index', { places })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})
router.get('/places/:id', (req, res) => {
  res.send('places/:id')
})

router.post('/',(req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=925&format=pjpg&exif=1&iptc=1'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })


module.exports = router
