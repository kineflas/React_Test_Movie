import React, { Component } from 'react';

import { Container, Content } from './styles';
import { reqSearchMovie } from '../../requests';
	
class SearchBar extends Component {
  constructor(props) {
    super(props);
		this.state = {
			searchValue: '',
		}
	}
  render() {
    const { handleChangeSerchValue, handleChangeMovies, resetMovies, page, handleChangeText } = this.props;
    return (
      <Container>
        <Content
          name="searchValue"
          onChangeText={(value) => this.setState({searchValue: value})}
          value={this.state.searchValue}
          onSubmitEditing={() => {
							if (this.state.searchValue) {
								resetMovies();
								handleChangeSerchValue(this.state.searchValue);
								reqSearchMovie(this.state.searchValue, page)
								.then(data => {
									handleChangeMovies(data);
									if (data.length != 0)
										handleChangeText('Résultats de votre recherche:')
									else
										handleChangeText('Aucun Résultat !')
								})
								.catch(err => err)
								.then(handleChangeSerchValue(this.state.searchValue))
							}
            }
          }
        />
      </Container>
    );
  }
}

export default SearchBar;
