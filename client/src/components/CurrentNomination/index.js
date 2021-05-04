import React, { Component } from 'react';
import API from '../../utils/API';
import Container from '@material-ui/core/Container';
import Nominations from './Nominations';
import './style.css';

class CurrentNomination extends Component {
    state ={
        nominatedMovies: [],
    }

    componentDidMount() {
        API.nominatedMovies()
            .then(nominatedMovies => this.setState({ nominatedMovies: nominatedMovies }))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <Container style={{textAlign:'center'}}>
                <h1>Current Nominees</h1>
                <Nominations movies={this.state.nominatedMovies} />
            </Container>
        )
    }
}

export default CurrentNomination;