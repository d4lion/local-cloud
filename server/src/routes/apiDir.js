const { Router } = require("express")
const router = Router()
const fs = require("fs")
const { cwd } = require("process")

router.get("/upload/directory", (req, res) => {
  fs.readdir(
    cwd() + "/server/public/upload",
    { withFileTypes: true },
    (err, files) => {
      err ? res.json({ message: "Directory not found" }) : res.json(files)
    }
  )
})

module.exports = router
