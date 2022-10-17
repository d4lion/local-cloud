const express = require("express")
const fs = require("fs/promises")

const router = express.Router()

router.get("/files", (req, res) => {
  res.send("Files")
})

module.exports = router
