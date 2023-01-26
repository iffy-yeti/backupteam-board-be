// const express = require('express')
// const cookieParser = require ('cookie-parser')

// const app = express()
// const port = 9000

// app.use(express.json())
// app.use(cookieParser())

// app.get("/", (req, res) => {
//     console.log(req.cookies)
//     res.send("/ 요청 했음")
// })

// app.post("/test", (req, res) => {
//     const {name, age} = req.body
//     console.log(name, age)
//     res.send({name, age})
// })


// //회원정보 한명 가져오기
// app.get("/users/:userId", (req, res) => {
//     const {userId} = req.params
//     console.log(userId)
//     res.send("getemid")
// })

// // 게시글 리스트 가져오기
// app.get("/articles", (req, res) => {
//     const post = {
//         "nickname":"옛다닉네임",
//         "content":"tested"
//     }
//     console.log(post)
//     res.send(post)
// })

// // 선택 게시글 상세 정보 가져오기
// app.get("/articles/:articleId", (req, res) => {
//     const {articleId} = req.params
//     console.log(articleId)
//     res.send(articleId)
// })

// // 로그인
// app.post("/login", (req, res) => {
//     const {email, password} = req.body
//     console.log(email, password)
//     res.send({email, password})
// })

// // 회원 가입
// app.post("/signup", (req, res) => {
//     const {email, password} = req.body
//     console.log(email, password)
//     res.send({email, password})
// })

// // 게시글 작성하기
// app.post("/posts", (req, res) => {
//     const {title, content} = req.body
//     console.log(title, content)
//     res.send({title, content})
// })

// //post로 안썼다 왜냐
// // 게시글 수정하기
// app.put("/posts/:postId", (req, res) => {
//     const {title, content} = req.body
//     const {postId} = req.params
// //구조분해할당으로 postId를 중괄호로 감싸줘서 중괄호 없앴음 >> 검색ㄱ
//     console.log(postId)
//     console.log(title, content)
//     res.send({title, content, postId})
// })

// // 게시글 삭제하기
// app.delete("/posts/:postId", (req, res) => {
//     const {postId} = req.params
//     //삭제만 하니까 body, query 안들어감
//     //query string 물음표에 뭗다뭐다 들어가는게 많아서 파람스가 더 보기 좋아서 씀
//     //라고 생각했지만 아님 파람스, 쿼리 쓰는 형식이 다른거 
//     console.log(postId)
//     res.send({postId})
// })


// app.listen(port, () => {
//     console.log('포트로 서버가 열렸슈')
// })