import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';


import { Container, Content, MovieImage } from './styles';

class MoviePreview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { movie, baseUrl } = this.props;
    return (
      <TouchableOpacity onPress={() => console.log('Movie press')}>
        <Container>
          <Content>
            <MovieImage source={{uri: `${baseUrl}/w92/${movie.item.poster_path}`}}/>
          </Content>
        </Container>
      </TouchableOpacity>
    );
  }
}

export default MoviePreview;