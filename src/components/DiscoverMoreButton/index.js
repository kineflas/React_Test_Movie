import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

import { Container, Content, StyledText } from './styles';
import { reqDiscoverMovie } from '../../requests';
	
class DiscoverMoreButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { handleChangeMovies, page } = this.props;
    return (
    <TouchableOpacity onPress={() => 
            reqDiscoverMovie(page)
                .then(data => handleChangeMovies(data))
                .catch(err => err)
        }>
        <Container>
            <Content>
                <StyledText>Discover More</StyledText>
            </Content>
        </Container>
    </TouchableOpacity>
    );
  }
}

export default DiscoverMoreButton;