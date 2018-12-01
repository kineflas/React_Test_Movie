import * as Axios from 'axios';

const token = '6a15d5f3089436abb82b8f4b9fb808cb';

const axios = Axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    ContentType: 'application/json',
  },
});

export const reqSearchMovie = searchQuery =>
  axios({
    method: 'get',
    url: `search/movie?api_key=${token}&query=${searchQuery}`,
  })
    .then(res => (res.data.results))
    .catch(err => {
      throw err;
    });