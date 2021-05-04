import axios from "axios";

const API = {
  getMovie: query => {
    return axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&t=${query}`);
  },
  // Deletes the book with the given id
  deleteMovie: id => {
    return axios.delete("/api/movies/" + id).then(result => result.data);
  },
  // Saves a book to the database
  addMovie: movieData => {
    return axios.post("/api/movies", movieData).then(result => result.data);
  },
  // Get the saved a books from the database
  nominatedMovies: () => {
    return axios.get("/api/movies").then(result => result.data);
  }
};

export default API;
