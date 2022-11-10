const { Router } = require("express")
const router = Router()
const multer = require("multer")
const mimetype = require("mime-types")
const fs = require("fs")

//Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (!fs.existsSync(`./server/public/${req.url}`)) {
      //Se comprueba si el directorio existe de no existir se crea
      fs.mkdir(`./server/public/${req.url}`, (err) => {
        err ? err : ""
      })
    }
    cb(null, `./server/public${req.url}`)
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

//Upload
const upload = multer({ storage: storage })

//Route
router.post("/upload/:destination", upload.array("file"), (req, res) => {
  res.status(204).end()
})

module.exports = router
