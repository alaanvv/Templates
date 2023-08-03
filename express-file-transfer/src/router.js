const Router = require('express').Router
const multer = require('multer')
const fileController = require('./controller/file')

const router = new Router()
const upload = multer({limits: {fileSize: 10 * 1024 * 1024}})

router.get('/file', fileController.getFile)
router.post('/file', upload.single('file'), fileController.postFile)

module.exports = router