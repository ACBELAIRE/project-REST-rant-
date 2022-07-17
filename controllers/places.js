const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('places/index')
})
router.get('/new', (req, res) => {
    res.render('places/new')
  })
  

module.exports = router
