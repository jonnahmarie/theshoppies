import axios from 'axios';

const url = 'http://localhost:4000/api'
const omdbURL = 'http://www.omdbapi.com/?apikey=b2f71a99&s='

const API = {
    // gets nominated movies
    getNominatedMovies: async () => {
        const result = await axios.get(url, { crossdomain:true })
        return result.data;
    },
    // searches OMDB API for new movie based on a query
    getNewMovie: query => {
        return axios.get(omdbURL + query, { crossdomain:true })
    },
    // gets movie with specific id
    getMovie: id => {
        return axios.get(url + '/' + id, { crossdomain:true })
    },
    // adds a new movie to the db
    addMovie: movieData => {
        return axios.post(url, movieData, { crossdomain:true })
        .then(result => result.data);
    },
    // removes a movie from the list of nominations
    removeMovie: id => {
        return axios.delete(url + '/' + id, { crossdomain:true })
        .then(result => result.data)
        .catch(error =>{
            if (error.response) {
                console.log(error.response)
            }
        })
    }
}

export default API;