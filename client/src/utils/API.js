import axios from 'axios';

export default {
    getMovie: query => {
        return axios.get(`http://www.omdbapi.com/?apikey={process.env.REACT_APP_OMDB_KEY}&t=${query}`);
    },
    deleteMovie: async (id) => {
        const result = await axios.delete('/api/movies/' + id);
        return result.data;
    },
    addMovie: async movieData => {
        const result = await axios.post('/api/movies', movieData);
        return result.data;
    },
    viewMovies: async () => {
        const result = await axios.get('/api/movies');
        return result.data;
    }
};