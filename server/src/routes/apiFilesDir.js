const { Router } = require("express")
const { cwd } = require("process")
const fs = require("fs")

const router = Router()

router.get("/upload/files/:dir", (req, res) => {
  let dirSearch = cwd() + `/server/public/upload/${req.params.dir}`
  fs.readdir(dirSearch, { withFileTypes: true }, (err, file) => {
    err ? res.json({ message: "Directory not found" }) : res.json(file)
  })
})

module.exports = router
