const express = require('express')
const router = require('./router')

const app = express()
const port = 404

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use(express.urlencoded({ extended: true }))
app.use(router)
app.use((req, res) => {res.status(404).render('404')}) // Need to be the last middleware

app.listen(port, () => console.log(`Running on http://localhost:${port}`))