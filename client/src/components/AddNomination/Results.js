import React from 'react';
import API from '../../utils/API';
import { Container, Grid, Card, CardActionArea, CardMedia, CardContent, CardActions, ThemeProvider, createMuiTheme, Button } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { green } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});

class Results extends React.Component {
    state = {
        nominatedMovies: [],
    }

    componentDidMount() {
        API.nominatedMovies()
            .then(nominatedMovies => this.setState({ nominatedMovies: nominatedMovies  }))
            .catch(err => console.error(err));
    }

    handleSave = movie => {
        if (this.state.nominatedMovies.map(movie => movie._id).includes(movie._id)) {
            API.deleteMovie(movie._id)
            .then(deletedMovie => this.setState({ nominatedMovies: this.state.nominatedMovies.filter(movie => movie._id !== deletedMovie._id) }))
            .catch(err => console.error(err));
        } else {
            API.addMovie(movie)
            .then(nominatedMovies => this.setState({ nominatedMovies: this.state.nominatedMovies.concat([nominatedMovies]) }))
            .catch(err => console.error(err));
        }
    }

    render() {
        return (
            <Container>
                <Grid container direction='row' justify='center' alignItems='center'>
                    <Grid item xs={1} />
                    <div style={{textAlign:'center'}}>
                        {!this.props.movies.length ? ( <h2>No Movie Results</h2>  ) : (
                            <div>
                                {this.props.movies.map(result => (
                                    <Grid item xs={2}>
                                        <Card>
                                            <CardActionArea>
                                                <CardMedia image={result.image} alt={result.title} />
                                                <CardContent>
                                                    <p>{result.title} ({result.year})</p>
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                                <ThemeProvider theme={theme}>
                                                    <Button variant='contained' color='primary' startIcon={<AddCircleIcon />} onClick={() => this.handleSave(result)}>
                                                        Add
                                                    </Button>
                                                </ThemeProvider>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                ))}
                            </div>
                        )}
                    </div>
                    <Grid item xs={1} />
                </Grid>
            </Container>
        )
    }
}

export default Results;