import React, { Component } from 'react';
import { FlatList } from 'react-native';

import { Container, Spacer, StyledText } from './styles';
import MoviePreview from '../../components/MoviePreview';
import DiscoverMoreButton from '../../components/DiscoverMoreButton';
import { reqDiscoverMovie } from '../../requests';
	
class DiscoverPreviews extends Component {
	componentDidMount () {
		if (this.props.movies.length === 0)
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
      handleLoadMovie,
			text
    } = this.props;
    return (
      <Container>
					<StyledText>
						{text}
					</StyledText>
        <FlatList
          data={movies}
          keyExtractor={(item) => item}
          renderItem={movie => <MoviePreview key={movie.id} id={movie.id} movie={movie} baseUrl={baseUrl} handleLoadMovie={handleLoadMovie}/>}
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
