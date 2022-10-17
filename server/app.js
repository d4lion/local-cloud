const express = require("express")
const morgan = require("morgan")
const fs = require("fs")

//Aplicacion
const app = express()

//Route imports
const upload = require("./src/routes/upload")

//Settings
app.set("port", 3000)

//Development dependencie
app.use(morgan("dev"))

//Routes
app.get("/", (req, res) => {
  res.send("Ok")
})

app.get("/upload", (req, res) => {
  res.sendFile("./views/index.html", {
    root: __dirname,
  })
})

//Api routes
app.get("/api/files", (req, res) => {
  fs.readdir(
    __dirname + "/storage/upload",
    { withFileTypes: true },
    (err, files) => {
      err ? res.json({ message: "Directory not found" }) : res.json(files)
    }
  )
})

app.get("/api/files/:dir", (req, res) => {
  let dirSearch = __dirname + `/storage/upload/${req.params.dir}`
  fs.readdir(dirSearch, { withFileTypes: true }, (err, files) => {
    err ? res.json({ message: "Directory not found" }) : res.json(files)
  })
})

app.use(upload)

//Server run and information
app.listen(app.get("port"))
console.log(`Server on port ${app.get("port")}`)
