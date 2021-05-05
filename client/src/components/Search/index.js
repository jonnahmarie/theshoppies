import React from 'react';
import { Container, TextField } from '@material-ui/core';

const Search = props => {
    return (
        <Container>
            <form noValidate autoComplete='off'>
                <TextField id='outlined-basic' label='Search for a movie title' variant='outlined' onChange={props.handleInputChange} value={props.search} name='search' style={{width:'60%'}} />
            </form>
        </Container>
    )
}

export default Search;