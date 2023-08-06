const Router = require('express').Router

const router = new Router()

router.get('/', (req, res) => res.sendFile(`${process.cwd()}/public/index.html`))

module.exports = router