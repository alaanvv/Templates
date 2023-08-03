const fs = require('fs')
const Zipper = require('adm-zip')

const filesPath = `${process.cwd()}/src/files`
const getFilePath = fileName => `${filesPath}/${fileName}`

const getFile = async (req, res) => {
  const files = [getFilePath('virgem.png'), getFilePath('vassoura.png')]
  
  const zip = new Zipper()
  files.map(file => zip.addLocalFile(file))
  await zip.writeZipPromise(getFilePath('files.zip'))

  res.sendFile(getFilePath('files.zip'))
}

const postFile = (req, res) => {
  const filePath = getFilePath(req.file.originalname)

  const file = fs.openSync(filePath, 'w')
  fs.writeSync(file, req.file.buffer)
  fs.closeSync(file)

  res.sendFile(filePath)
}

module.exports = { getFile, postFile }