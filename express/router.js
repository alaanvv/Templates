const Router = require('express').Router

const router = new Router()

router.get('/', (req, res) => {
  res.render('home/home')
})

module.exports = router