import React, { Component } from 'react';

import { Container } from './styles';
import SearchBar from '../../components/SearchBar';
import MoviePreviews from '../../containers/MoviePreviews';
import { reqGetApiConfiguration } from '../../requests';
	
class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      movies: [],
      page:1,
      apiConfiguration: {
        images: {}
      }
    };
  }
  handleChangeSerchValue = newSearchValue => {
    this.setState({ searchValue: newSearchValue});
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
  componentWillMount() {
    reqGetApiConfiguration()
      .then(res => this.handleChangeApiConfiguration(res));
  }
  render() {
    const {
      searchValue,
      movies,
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
        <MoviePreviews movies={movies} baseUrl={apiConfiguration.images.secure_base_url}/>
      </Container>
    );
  }
}

export default Movies;