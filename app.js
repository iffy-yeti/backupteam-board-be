const express = require('express')
const cookieParser = require ('cookie-parser')

const app = express()
const port = 9000

app.use(express.json())
app.use(cookieParser())

app.get("/", (req, res) => {
    console.log(req.cookies)
    res.send("/ 요청 했음")
})

app.post("/test", (req, res) => {
    const {name, age} = req.body
    console.log(name, age)
    res.send({name, age})
})

app.get("/host", (req, res) => {
    res.send("/host 요청 했다")
})

app.post("/login", (req, res) => {
    console.log
})

app.post("/signup", (req, res) => {
    res.send()
})

app.get("/info", (req, res) => {
    res.send()
})

app.get("list", (req, res) => {
    res.send()
})

app.get("/articles", (req, res) => {
    res.send()
})

app.post("/post", (req, res) => {
    res.send("/post 요청 했소")
})

app.post("/edit", (req, res) => {
    res.send()
})

app.post("/delete", (req, res) => {
    res.send()
})


app.listen(port, () => {
    console.log('포트로 서버가 열렸슈')
})