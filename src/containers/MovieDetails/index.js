import React, { Component } from 'react';

import { Container, Content, StyledImageBackground, StyledText, ResumeContainer, Resume } from './styles';
	
class MovieDetails extends Component {
  render() {
    const {
        movie,
        handleResetMovie,
        baseUrl
    } = this.props;
    return (
        <Container
            animationType="slide"
            transparent={false}
            visible={movie !== undefined}
            onRequestClose={() => {
            handleResetMovie();
        }}>
            {console.log('movie: ', movie)}
            <Content>
               {movie !== undefined &&  <StyledImageBackground source={{uri: `${baseUrl}w500${movie ? movie.backdrop_path : ''}`}}>
                    <StyledText>{movie.original_title}</StyledText>
                </StyledImageBackground>}
                <ResumeContainer>
                    <Resume>{movie !== undefined && movie.overview || ''}</Resume>
                </ResumeContainer>
            </Content>
      </Container>
    );
  }
}

export default MovieDetails;
