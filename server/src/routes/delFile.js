const { Router } = require("express")
const fs = require("fs")
const { cwd } = require("process")
const router = Router()

router.delete("/del/:dir/:file", (req, res) => {
  const fileDeleteRoute =
    cwd() + `/server/public/upload/${req.params.dir}/${req.params.file}`
  if (fs.existsSync(`${fileDeleteRoute}`)) {
    fs.unlinkSync(fileDeleteRoute)
    res.status(200).json({ file: `${req.params.file}` })
  } else {
    res.status(404).json({ file: "Not Found" })
  }
})

module.exports = router
