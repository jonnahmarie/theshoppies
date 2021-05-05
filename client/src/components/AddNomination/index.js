import React, { Component } from 'react';
import Search from '../Search';
import Results from './Results';
import API from '../../utils/API';
import Container from '@material-ui/core/Container';

class AddNomination extends Component {
    state = {
        value: "",
        movies: []
    };

    componentDidMount() {
        this.searchMovie();
    }

    addNom = movieData => {
        return {
            _id: movieData.id,
            title: movieData.title,
            year: movieData.year,
            image: movieData.image
        }
    };

    searchMovie = query => {
        API.getMovie(query)
            .then(res => this.setState({ movies: res.data.items.map(movieData => this.addNom(movieData)) }))
            .catch(err => console.error(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <Container style={{textAlign:'center'}}>
                <h1>Add a Nominee</h1>
                <Search search={this.state.search} handleInputChange={this.handleInputChange} />
                <Results movies={this.state.movies} />
            </Container>
        )
    }
};

export default AddNomination;