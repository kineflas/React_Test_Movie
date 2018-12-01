import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

import { Container, Content, StyledText } from './styles';
import { reqSearchMovie } from '../../requests';
	
class LoadMoreButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { handleChangeMovies, searchValue, page } = this.props;
    return (
    <TouchableOpacity onPress={() => 
            reqSearchMovie(searchValue, page)
                .then(data => handleChangeMovies(data))
                .catch(err => err)
        }>
        <Container>
            <Content>
                <StyledText>Load More</StyledText>
            </Content>
        </Container>
    </TouchableOpacity>
    );
  }
}

export default LoadMoreButton;