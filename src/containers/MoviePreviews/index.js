import React, { Component } from 'react';
import { FlatList } from 'react-native';

import { Container, Spacer } from './styles';
import MoviePreview from '../../components/MoviePreview';
import LoadMoreButton from '../../components/LoadMoreButton';
	
class MoviePreviews extends Component {
  render() {
    const {
      movies,
      baseUrl,
      handleChangeMovies,
      page,
      searchValue,
      handleLoadMovie
    } = this.props;
    return (
      <Container>
        <FlatList
          data={movies}
          keyExtractor={(item, index) => index}
          renderItem={movie => <MoviePreview id={movie.id} movie={movie} baseUrl={baseUrl} handleLoadMovie={handleLoadMovie}/>}
        />
          {movies.length > 0 &&
            <LoadMoreButton
              page={page}
              searchValue={searchValue}
              handleChangeMovies={handleChangeMovies}
            />
          }
        <Spacer />
      </Container>
    );
  }
}

export default MoviePreviews;
