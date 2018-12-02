import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { reqGetMovie } from '../../requests';

import { Container, Content, MovieImage, MovieTitle } from './styles';

class MoviePreview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { movie, baseUrl, handleLoadMovie } = this.props;
    return (
      <TouchableOpacity onPress={() => reqGetMovie(movie.item.id).then(res => handleLoadMovie(res))}>
        <Container>
          <Content>
            <MovieImage source={{uri: `${baseUrl}/w92/${movie.item.poster_path}`}}/>
            <MovieTitle>{movie.item.title}</MovieTitle>
          </Content>
        </Container>
      </TouchableOpacity>
    );
  }
}

export default MoviePreview;