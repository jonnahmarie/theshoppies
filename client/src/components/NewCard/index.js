import React, { Component } from 'react';
import API from '../../utils/API';

class NewCard extends Component {
    state = {
        newMovies: [],
    }

    componentDidMount() {
        this.searchMovie();
    }

    makeMovie = movieData => {
        return {
            _id: movieData.id,
            image: movieData.image,
            title: movieData.title,
            year: movieData.year
        }
    }

    searchMovie = query => {
        API.getNewMovie(query)
            .then(res => this.setState({newMovies: res.data.items.map(movieData => this.makeMovie(movieData))}))
            .catch(err => console.error(err));
    }

    handleAdd = movie => {
        if (this.state.newMovies.map(movie => movie._id).includes(movie._id)) {
            API.removeMovie(movie._id)
                .then(removedMovie => this.setState({ newMovies: this.state.newMovies.filter(movie => movie._id !== removedMovie._id) }))
                .catch(err => console.error(err))
        } else {
            API.addMovie(movie)
                .then(addedMovie => this.setState({ newMovies: this.state.newMovies.concat([addedMovie]) }))
                .catch(err => console.error(err))
        }
    }

    render() {
        return (
            <div>
                {!this.props.movies.length ? (
                    <div className='col s12'>
                        <h5>No movie results to display</h5>
                    </div>
                ) : (
                    <div>
                        {this.props.movies.map(result => (
                            <div className='col s2'>
                                <div className='card'>
                                    <div className='card-image'>
                                        <img src={result.image} alt={result.title} />
                                    </div>
                                    <div className='card-content'>
                                        <p style={{textAlign:'center'}}>
                                            {result.title} ({result.year})
                                        </p>
                                    </div>
                                    <div className='card-action'>
                                        <button className = 'waves-effect waves-light btn' type='button' name='add' onClick={() => this.handleAdd(result)}>
                                            <i className='material-icons left'>
                                            add_circle_outline</i>
                                            add
                                        </button>                        
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        )
    }
}

export default NewCard;