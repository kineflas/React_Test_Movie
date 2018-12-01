import React, { Component } from 'react';
import { FlatList } from 'react-native';

import { Container, Spacer } from './styles';
import MoviePreview from '../../components/MoviePreview';
	
class MoviePreviews extends Component {
  render() {
    const { movies, baseUrl } = this.props;
    return (
      <Container>
        <FlatList
          data={movies}
          renderItem={movie => <MoviePreview id={movie.id} movie={movie} baseUrl={baseUrl}/>}
        />
        <Spacer/>
      </Container>
    );
  }
}

export default MoviePreviews;