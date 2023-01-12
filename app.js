const express = require('express')

const app = express()
const port = 3000

app.get("/host", (req, res) => {
    res.send("/host 요청 했다")
})

app.post("/post", (req, res) => {
    res.send("/post 요청 했소")
})

app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸슈')
})