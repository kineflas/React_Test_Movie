import React, { Component } from 'react';

import { Container } from './styles';
import SearchBar from '../../components/SearchBar';
import MoviePreviews from '../../containers/MoviePreviews';
	
class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = { searchValue: '', movies: [] };
  }
  handleChangeSerchValue = newSearchValue => {
    this.setState({ searchValue: newSearchValue});
  }
  handleChangeMovies = newMovies => {
    this.setState({ movies: [...this.state.movies, ...newMovies]});
  }
  resetMovies = () => {
    this.setState({ movies: []});
  }
  render() {
    const {
      searchValue,
      movies
    } = this.state;
    return (
      <Container>
        <SearchBar
          handleChangeSerchValue={this.handleChangeSerchValue}
          searchValue={searchValue}
          handleChangeMovies={this.handleChangeMovies}
          resetMovies={this.resetMovies}
        />
        <MoviePreviews movies={movies}/>
      </Container>
    );
  }
}

export default Movies;