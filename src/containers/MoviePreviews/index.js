import React, { Component } from 'react';
import { FlatList } from 'react-native';

import { Container } from './styles';
import MoviePreview from '../../components/MoviePreview';
	
class MoviePreviews extends Component {
  render() {
    const { movies } = this.props;
    return (
      <Container>
        <FlatList
          data={movies}
          renderItem={movie => <MoviePreview key={movie.id} movie={movie}/>}
        />
      </Container>
    );
  }
}

export default MoviePreviews;