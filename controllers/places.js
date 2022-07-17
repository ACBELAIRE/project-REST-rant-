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

router.post('/',(req, res) => {
  console.log(req.body)
  res.send('/places')
})

module.exports = router
