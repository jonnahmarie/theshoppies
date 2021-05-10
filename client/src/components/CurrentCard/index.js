import React, { Component } from 'react';
import API from '../../utils/API';

class CurrentCard extends Component {
    state = {
        nominatedMovies: [],
    }

    componentDidMount() {
        API.getNominatedMovies()
            .then(nominatedMovies => this.setState({nominatedMovies:nominatedMovies}))
            .catch(err => console.error(err))
    }

    handleNominate = movie => {
        if (this.state.nominatedMovies.map(movie => movie._id).includes(movie._id)) {
            API.removeMovie(movie._id)
                .then(removedMovie => this.setState({ nominatedMovies: this.state.nominatedMovies.filter(movie => movie._id !== removedMovie._id) }))
                .catch(err => console.error(err))
        } else {
            API.addMovie(movie)
                .then(addedMovie => this.setState({ nominatedMovies: this.state.nominatedMovies.concat([addedMovie]) }))
                .catch(err => console.error(err))
        }
    }

    render() {
        return (
            <div>
                {!this.props.movies.length ? (
                    <div className='col s12'>
                        <h5>No movies are nominated</h5>
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
                                        <span className='center-align'>
                                            {result.title} ({result.year})
                                        </span>
                                    </div>
                                    <div className='card-action'>
                                        <button className='waves-effect waves-light btn' type='button' name='remove' onClick={() => this.handleNominate(result)}>
                                            <i className='material-icons left'>remove_circle_outline</i>
                                                                remove
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

export default CurrentCard;