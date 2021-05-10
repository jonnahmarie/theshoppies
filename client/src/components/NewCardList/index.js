import React from 'react';
import API from '../../utils/API';
import Search from '../Search';
import NewCard from '../NewCard';

class NewCardList extends React.Component {
    state = {
        value: '',
        newMovies: []
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

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
        this.searchMovie(this.state.search)
    }

    render() {
        return (
            <div>
                <div className='row'>
                    <Search
                        search={this.state.search}
                        handleInputChange={this.handleInputChange}
                    />
                </div>
                <div className='row'>
                    <NewCard movies={this.state.newMovies} />
                </div>
            </div>
        )
    }
}

export default NewCardList;