import React from 'react';

const Search = (props) => {
    return (
        <div className='col offset-s2 s10'>
            <div className='input-field col s10'>
                <i className='material-icons prefix'>search</i>
                <input
                    id='search_movie'
                    type='text'
                    className='validate'
                    onChange={props.handleInputChange}
                    value={props.search}
                />
                <label for='search_movie'>Search for a movie title.</label>
            </div>
        </div>
    )
}

export default Search;