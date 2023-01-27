const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const movies = require("./src/models/movie");
const users = require("./src/models/user");

const app = express();
const port = 9000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());


//따라 바꿔보기
function getMoviesByPage(page) {
  const movieAi = [...moviesList];
  //splice로 잘려서 2페이지 갔다가 1페이지 가면 사라져있어서 복제배열로 나눠주기위함 - 시간도 정렬이 .... 됐는디......
  //정렬된 배열을 복제 배열로 가져오면 정렬된 배열에 splice가 적용된다. moviesLsit는 이미 정렬된것이지 맞쥐 movieAi를 splice하면 정렬된 배열을
  //splice 하는것이라고 지0센세가...
  const lastPage = Math.ceil(movies.length / 10);
  // console.log(lastPage)
  const startIndex = (page - 1) * 10;
  // 각각의 페이지에 시작 인덱스가 필요해서 startIndex 씀 0번쨰~10번째 인덱스의 시작을
  const paginationMovies = movieAi.splice(startIndex, 10);
  //삭제된거 들어간다 얘는
  // console.log(pagination)


  // const moviesList = movies.map((movie) => ({
  const moviesList = movies.map((movie) => ({
    ...movie,
    name: users.find((user) => user.id === movie.user_id).name,
  }));

  moviesList.sort((a, b) => {
    const preTimestamp = new Date(a.created_at).getTime();
    const curTimestamp = new Date(b.created_at).getTime();
    return curTimestamp - preTimestamp;
  });
}

app.get("/movies", (req, res) => {
  const page = req.query.page || 1;

  const paginationMovies = getMoviesByPage(page)
  res.send({
    pageInfo: { lastPage },
    movies: paginationMovies
  });
});

//아래는 원래 내가 쓴것들!--------------
// res.send(movies.map(movie => ({
//     ...movie,
//     name: users.find(유저 => 유저.id === movie.user_id).name
// })))
//})
//{유저.id === movie.user_id} 중괄호 떼니까 된당 - name이 들어가진당

app.post("/movies", (req, res) => {
  const 영화등록 = req.body;
  영화등록.id = movies[movies.length - 1].id + 1; //인덱스 값 -- movies에서 2번이 없음
  영화등록.hit_count = 0;
  영화등록.created_at = new Date().toISOString();
  movies.unshift(영화등록);
  res.send(영화등록);
});

app.get("/movies/:id", (req, res) => {
  const { id } = req.params;
  const views = movies.find((movie) => movie.id === Number(id));
  ++views.hit_count;
  // console.log(views.hit_count)
  const findIndex = movies.findIndex((movieInfo) => movieInfo.id === views.id);
  // console.log(findIndex)
  if (findIndex >= 0) {
    movies.splice(findIndex, 1, views);
  }
  console.log(movies);
  res.send(views);

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
});

app.listen(port, () => {
  console.log("포트로 서버가 열렸슈");
});
