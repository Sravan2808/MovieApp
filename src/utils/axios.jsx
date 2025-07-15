import axios from 'axios';

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjE0N2EzZGMzMGFjOTFiNzE2ZTY3Y2MyOTE2YTE3OSIsIm5iZiI6MTczNDc3NDc1NC45NjEsInN1YiI6IjY3NjY4ZmUyMWIwNmM1ZjI4Yjc0YmI4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aaZI426vL-_gc52GiOsLbz0TcLGnvLYFThu79PyD3x0'
      }
})

export default instance;