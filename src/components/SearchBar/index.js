import React, { Component } from 'react';

import { Container, Content } from './styles';
import { reqSearchMovie } from '../../requests';
	
class SearchBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { searchValue, handleChangeSerchValue, handleChangeMovies } = this.props;
    return (
      <Container>
        <Content
          name="searchValue"
          onChangeText={handleChangeSerchValue}
          value={searchValue}
          onSubmitEditing={() =>
            reqSearchMovie(searchValue)
            .then(data => handleChangeMovies(data))
            .catch(err => err)
          }
        />
      </Container>
    );
  }
}

export default SearchBar;