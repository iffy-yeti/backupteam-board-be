const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express()
const port = 9000

const movies = [
    { id: 1, movie_title: "Misérables, Les", hit_count: 23, user_id: 1, created_at: "2022-08-11 00:40:32" },
    { id: 3, movie_title: "Captain Ron", hit_count: 1, user_id: 1, created_at: "2022-08-14 18:09:47" },
    { id: 4, movie_title: "Siberia", hit_count: 37, user_id: 9, created_at: "2022-02-08 02:44:29" },
    { id: 5, movie_title: "Girl, The", hit_count: 82, user_id: 6, created_at: "2022-08-29 00:02:21" },
    { id: 6, movie_title: "44 Minutes: The North Hollywood Shoot-Out", hit_count: 2, user_id: 4, created_at: "2022-12-06 20:33:12" },
    { id: 7, movie_title: "C'mon Man", hit_count: 62, user_id: 2, created_at: "2022-08-18 16:43:05" },
    { id: 8, movie_title: "Jim Jefferies: Alcoholocaust", hit_count: 4, user_id: 8, created_at: "2022-07-05 16:49:03" },
    { id: 9, movie_title: "Grand Budapest Hotel, The", hit_count: 35, user_id: 9, created_at: "2022-01-10 08:22:27" },
    { id: 10, movie_title: "Ju-on: The Curse 2", hit_count: 64, user_id: 7, created_at: "2022-10-18 21:59:19" },
    { id: 11, movie_title: "Looney Tunes: Back in Action", hit_count: 17, user_id: 8, created_at: "2022-10-26 06:56:30" },
    { id: 12, movie_title: "Undertaker and His Pals, The", hit_count: 91, user_id: 6, created_at: "2022-02-22 11:23:11" },
    { id: 13, movie_title: "BlinkyTM", hit_count: 4, user_id: 5, created_at: "2022-01-08 21:02:09" },
    { id: 14, movie_title: "Alien Predator (Mutant II) (Falling, The)", hit_count: 47, user_id: 2, created_at: "2022-02-28 15:55:13" },
    { id: 15, movie_title: "Lorenzo's Oil", hit_count: 26, user_id: 6, created_at: "2022-01-21 02:46:27" },
    { id: 16, movie_title: "Beyond Re-Animator", hit_count: 88, user_id: 5, created_at: "2022-04-26 13:44:52" },
    { id: 17, movie_title: "Mississippi Burning", hit_count: 64, user_id: 8, created_at: "2022-11-14 05:23:58" },
    { id: 18, movie_title: "Last Circus, The (Balada triste de trompeta) (Sad Trumpet Ballad, A)", hit_count: 55, user_id: 1, created_at: "2022-03-24 06:27:21" },
    { id: 19, movie_title: "Power and Terror: Noam Chomsky in Our Times", hit_count: 85, user_id: 3, created_at: "2022-04-30 19:43:43" },
    { id: 20, movie_title: "Grumpy Cat's Worst Christmas Ever", hit_count: 58, user_id: 9, created_at: "2022-12-13 00:46:27" }
]
const users = [
    { id: 1, name: "Trix Hannaby", email: "thannaby2r@home.pl" },
    { id: 2, name: "Mead Lantiff", email: "mlantiff2q@imageshack.us" },
    { id: 3, name: "Margette Scaplehorn", email: "mscaplehorn2p@parallels.com" },
    { id: 4, name: "Kimmy Hulks", email: "khulks2o@google.de" },
    { id: 5, name: "Margot Haward", email: "mhaward2n@census.gov" },
    { id: 6, name: "Meredith Spendlove", email: "mspendlove2m@spiegel.de" },
    { id: 7, name: "Tuck Francis", email: "tfrancis2l@msn.com" },
    { id: 8, name: "Duke Davsley", email: "ddavsley2k@pinterest.com" },
    { id: 9, name: "Jimmy Weld", email: "jweld2j@tripadvisor.com" },
    { id: 10, name: "Kaylee Jakoubec", email: "kjakoubec2i@epa.gov" }
]

app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.get("/movies", (req, res) => {

    const moviesList = movies.map(movie => ({
        ...movie,
        name: users.find(user => user.id === movie.user_id).name
    }))

    moviesList.sort((a, b) => {
        const preTimestamp = new Date(a.created_at).getTime()
        const curTimestamp = new Date(b.created_at).getTime()
        return curTimestamp - preTimestamp
    })
    res.send(moviesList)

//아래는 원래 내가 쓴것들!--------------
    // res.send(movies.map(movie => ({
    //     ...movie,
    //     name: users.find(유저 => 유저.id === movie.user_id).name
    // })))
})
//{유저.id === movie.user_id} 중괄호 떼니까 된당 - name이 들어가진당

app.post("/movies", (req, res) => {
    const 영화등록 = req.body
    영화등록.id = movies[movies.length - 1].id + 1 //인덱스 값 -- movies에서 2번이 없음
    영화등록.hit_count = 0
    영화등록.created_at = new Date().toISOString()
    movies.push(영화등록)
    res.send(영화등록)
})


app.get('/movies/:id', (req, res) => {
    const { id } = req.params
    const views = movies.find(movie => movie.id === Number(id))
    ++views.hit_count
    // console.log(views.hit_count)
    const findIndex = movies.findIndex(movieInfo => movieInfo.id === views.id)
    // console.log(findIndex)
    if (findIndex >= 0) {
        movies.splice(findIndex, 1, views)
    }
    console.log(movies)
    res.send(views)


    // // 1. 사용자가 보내준 id 를 가져온다
    // const { id } = req.params
    // // 2. id 에 해당하는 movie 를 가져온다
    // const thisMovie = movies.find((movie) => movie.id === id)
    // // 3. 가져온 movie 에서 hit_count 1을 더한 객체를 만든다
    // const countHit = thisMovie.find((movie) => movie.id)
    // countHit.hit_count += 1
    // // 4. hit_count 1을 더한 객체를 movies 내에서 기존 객체에 치환한다. (findIndex, splice 사용)
    // const countPush = movies.find((movie) => movie.id === id)
    // movies.splice(countPush, 1, countHit)

    // console.log(movies)
    // // 5. hit_count 1을 더한 객체를 반환한다.
    // res.send(thisMovie)
})


app.listen(port, () => {
    console.log('포트로 서버가 열렸슈')
})

