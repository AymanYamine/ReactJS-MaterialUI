import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import DisplayMovies from './DisplayMovies'

class Search extends Component {
  state = {
    searchText: '',
    apiUrl: 'https://api.tvmaze.com',
 //   movie: {score: '',
   // show:{
      //  id: '',url: '', genre: '' , status, runtime,
    //}

//}
    movies: []
  };

  onTextChange = e => {
    const val = e.target.value;
    this.setState({ [e.target.name]: val }, () => {
      if (val === '') {
        this.setState({ movies: [] });
      } else {
        axios
          .get(
            `${this.state.apiUrl}/search/shows?q=${
              this.state.searchText
            }`
          )
          .then(res => this.setState({ movies: res.data }))
          .catch(err => console.log(err));
      }
    });
  };

 

  render() {
    console.log(this.state.movies);
   
    return (
      <div>
        <TextField
          name="searchText"
          value={this.state.searchText}
          onChange={this.onTextChange}
          placeholder="Search for movies"
          fullWidth={true}
        /> 
     <br />
        {this.state.movies.length > 0 ? (
          <DisplayMovies movies={this.state.movies} />
        ) : null}
   
      </div>
    
    );
  }
}

export default Search;