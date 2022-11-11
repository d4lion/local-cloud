const { Router } = require("express")
const fs = require("fs")
const { cwd } = require("process")

const router = Router()

router.put("/create/dir/:dir", (req, res) => {
  if (!fs.existsSync(`${cwd()}/server/public/upload/${req.params.dir}`)) {
    fs.mkdir(`${cwd()}/server/public/upload/${req.params.dir}`, (err) => {
      if (err) {
        res.status(500).send(err)
      } else {
        res.status(200)
      }
    })
  } else {
    res.status(200)
  }
})

module.exports = router
