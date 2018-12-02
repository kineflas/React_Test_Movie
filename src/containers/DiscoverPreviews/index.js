import React, { Component } from 'react';
import { FlatList } from 'react-native';

import { Container, Spacer } from './styles';
import MoviePreview from '../../components/MoviePreview';
import DiscoverMoreButton from '../../components/DiscoverMoreButton';
import { reqDiscoverMovie } from '../../requests';
	
class DiscoverPreviews extends Component {
	componentDidMount () {
		console.log('Debug');
		if (this.props.movies.length === 0)
			console.log('Debug');
			reqDiscoverMovie(1)
			.then(data => this.props.handleChangeMovies(data))
			.catch(err => err);
	}
  render() {
    const {
      movies,
      baseUrl,
      handleChangeMovies,
      page,
      searchValue
    } = this.props;
    return (
      <Container>
        <FlatList
          data={movies}
          renderItem={movie => <MoviePreview id={movie.id} movie={movie} baseUrl={baseUrl} />}
        />
          {movies.length > 0 &&
            <DiscoverMoreButton
              page={page}
              handleChangeMovies={handleChangeMovies}
            />
          }
        <Spacer />
      </Container>
    );
  }
}

export default DiscoverPreviews;
