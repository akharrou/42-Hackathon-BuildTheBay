import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Filter from './components/filter.js';
import Restaurant from './components/restaurant.js';
import Navibar from './components/navibar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
		<div>
			<Navibar />
			<Filter />
			<Restaurant />
   	   	</div>
      </div>
    );
  }
}

export default App;
