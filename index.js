const express = require('express')
const app = express()
const port = 3000
const db = require("quick.db")
const uuid = require("uuid")

app.use(express.static("client"))
app.use(require("body-parser").json())

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.post("/submit", (req, res) => {
    db.set(uuid.v4(), req.body)
})

app.get("/data", (req, res) => {
    var all = db.all()
    var data = []
    all.forEach(yee => data.push(yee.data))
    res.end(data.toString())
})