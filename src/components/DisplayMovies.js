import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import {Link} from 'react-router-dom'

class DisplayMovies extends Component {
  


  render() {
    let movieListContent;
    const { movies } = this.props;
console.warn("now", movies);
    if (movies) {
      movieListContent = (
        <GridList cols={3}>
          {movies.map(movie => (
            <GridTile
              title={movie.show.name}
              key={movie.show.id}
              subtitle={
                <span>
                  Type : <strong>{movie.show.type}</strong>
                </span>
              }
              actionIcon={
                <Link to ={{ pathname : "/details" , movieprops: movie}} >
                <IconButton >
                  <ZoomIn color="white" />
                </IconButton> </Link>
              }
            >
         {movie.show.image?     <img src={movie.show.image.original } alt="" /> : 
        <img src="/image-not-found.png" alt="" /> }
            </GridTile>
          ))}
        </GridList>
      );
    } else {
      movieListContent = null;
    }

    return (
      <div>
        {movieListContent}
      </div>
    );
  }
}

DisplayMovies.propTypes = {
  images: PropTypes.array.isRequired
};

export default DisplayMovies;