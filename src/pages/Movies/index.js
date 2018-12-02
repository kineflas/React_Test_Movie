import React, { Component } from 'react';

import { Container } from './styles';
import SearchBar from '../../components/SearchBar';
import MoviePreviews from '../../containers/MoviePreviews';
import MovieDetails from '../../containers/MovieDetails';
import DiscoverPreviews from '../../containers/DiscoverPreviews';
import { reqGetApiConfiguration } from '../../requests';
	
class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      movie: undefined,
      movies: [],
      page: 1,
      apiConfiguration: {
        images: {}
      }
    };
  }
  handleChangeSerchValue = newSearchValue => {
    this.setState({ searchValue: newSearchValue });
  }
  handleChangeApiConfiguration = newApiConfiguration => {
    this.setState({ apiConfiguration: newApiConfiguration });
  }
  handleChangeMovies = newMovies => {
    this.setState({ movies: [...this.state.movies, ...newMovies], page: this.state.page + 1 });
  }
  resetMovies = () => {
    this.setState({ movies: [], page: 1 });
  }
  handleLoadMovie = newMovie => {
    this.setState({ movie: newMovie })
  }
  handleResetMovie = () => {
    this.setState({ movie: undefined })
  }
  componentWillMount() {
    reqGetApiConfiguration()
      .then(res => this.handleChangeApiConfiguration(res));
  }

  render() {
    const {
      searchValue,
      movies,
      movie,
      apiConfiguration,
      page
    } = this.state;
    return (
      <Container>
        <SearchBar
          handleChangeSerchValue={this.handleChangeSerchValue}
          searchValue={searchValue}
          handleChangeMovies={this.handleChangeMovies}
          resetMovies={this.resetMovies}
          page={page}
        />
        {searchValue.length > 0 ?
          <MoviePreviews
            movies={movies}
            baseUrl={apiConfiguration.images.secure_base_url}
            handleChangeMovies={this.handleChangeMovies}
            page={page}
            searchValue={searchValue}
            handleLoadMovie={this.handleLoadMovie}
          /> :
          <DiscoverPreviews
            movies={movies}
            baseUrl={apiConfiguration.images.secure_base_url}
            handleChangeMovies={this.handleChangeMovies}
            page={page}
            handleLoadMovie={this.handleLoadMovie}
          />
        }
        <MovieDetails movie={movie} handleResetMovie={this.handleResetMovie} baseUrl={apiConfiguration.images.secure_base_url}/>
      </Container>
    )
  }
}

export default Movies;