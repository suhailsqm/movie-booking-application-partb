import React, { Component } from 'react';
import Home from '../screens/home/home';
import Details from '../screens/details/details';
//import moviesData from '../common/moviesData';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BookShow from '../screens/bookshow/BookShow';
import Confirmation from '../screens/confirmation/Confirmation';

class Controller extends Component {
    constructor() {
        super();
        this.baseUrl = 'http://localhost:8085/api/v1';
      }
  render() {
    return (
      <Router>
        <div className="main-container">
        <Route exact path='/' render={(props) => <Home {...props} baseUrl={this.baseUrl} />} />
          <Route path='/movie/:id' render={(props) => <Details {...props} baseUrl={this.baseUrl} />} />
          <Route path='/bookshow/:id' render={(props) => <BookShow {...props} baseUrl={this.baseUrl} />} />
          <Route path='/confirm/:id' render={(props) => <Confirmation {...props} baseUrl={this.baseUrl} />} />
        </div>
      </Router>
    )
  }
}

export default Controller;