import React from 'react';
import './App.css';
import Header from './components/Header'
import Search from './components/Search'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieDetails from './components/MovieDetails'
import Footer from './components/Footer'

function App() {
  return (
    <MuiThemeProvider>
      <BrowserRouter>
    <div >
      <Header/> <br/>
     <Route exact path="/" component= {Search}  />
     <Route  exact path="/details" component= {MovieDetails}  />
     <Footer/>
    </div> </BrowserRouter> </MuiThemeProvider>
  );
}

export default App;
