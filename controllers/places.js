const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('places/index')
})
router.get('/new', (req, res) => {
  res.render('places/new')
})
router.get('/places/:id', (req, res) => {
  res.send('places/:id')
})


module.exports = router
