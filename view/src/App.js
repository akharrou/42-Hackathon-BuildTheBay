import React, { Component } from 'react';
import './App.css';
//import Filter from './components/filter.js';
import RestaurantList from './components/restaurantlist.js';
import Navibar from './components/navibar.js';
import Map from './components/map.js';
import Login from './components/login.js';
import Main from './components/main.js';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {

	constructor(){
    super();
    this.state = {
      lat: 37.529659,
      lng: -122.040237,
      user: null
    }
		this.get_coords = this.get_coords.bind(this);
  }	
  

     get_coords = () => {
    if (navigator.geolocation)
    {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        console.log(position.coords.latitude);
         console.log(position.coords.longitude);
    });
  
	}}

	componentDidMount() {
		this.get_coords();
	}

  render() {
	return (
	<div className="App">
  <BrowserRouter>
		{/* <Navibar user={this.state.user}/>
		{<Filter />}
		<Map get_coords={this.get_coords} lat={this.state.lat} lng={this.state.lng}/>
    <RestaurantList /> */}
    <Route path="/login" render={(props) => <Login />} />
    <Route path="/home" render={(props) => <Main />} />
    </BrowserRouter>
	</div>
	);
  }
}

export default App;
