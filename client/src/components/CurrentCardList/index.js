import React, { Component } from 'react';
import API from '../../utils/API';
import CurrentCard from '../CurrentCard';

class CurrentCardList extends Component {
    state = {
        nominatedMovies: [],
    }

    componentDidMount() {
        API.getNominatedMovies()
            .then(nominatedMovies => this.setState({nominatedMovies:nominatedMovies}))
            .catch(err => console.error(err));
    }
    
    render() {
        return (
            <div className='row'>
                <CurrentCard movies={this.state.nominatedMovies} />
            </div>
        )
    }
}

export default CurrentCardList;