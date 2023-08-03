const express = require('express')
const cors = require('cors')
const router = require('./router.js')

const app = express()
const port = 666

app.use(cors())
app.use(router)

app.listen(port)