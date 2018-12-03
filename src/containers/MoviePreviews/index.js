import React, { Component } from 'react';
import { FlatList } from 'react-native';

import { Container, Spacer, StyledText } from './styles';
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
