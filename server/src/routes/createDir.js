const { Router } = require("express")
const fs = require("fs")
const { cwd } = require("process")

const router = Router()

router.put("/create/:dir", (req, res) => {
  if (fs.existsSync(`${cwd()}/server/upload/${req.params.dir}`)) {
    res.send("Existe")
  } else {
    res.send("No existe")
  }
})

module.exports = router
