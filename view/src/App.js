import React, { Component } from 'react';
import './App.css';
import Login from './components/login.js';
import LandingPage from './components/main.js';
import Admin from './components/admin.js'
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {

	constructor(){
    super();
    this.state = {
	  coords: {
			lat: 0,
			lng: 0,
		  	map_loaded: false
	  },
		restaurants: {
			restaurants: null,
			filtered: null,
			loaded: false
		},
	  category: null,
      user: null
    }
		this.get_coords = this.get_coords.bind(this);
		this.set_category = this.set_category.bind(this);
		this.get_restaurants = this.get_restaurants.bind(this);
  }

	get_restaurants = () => {
		fetch('http://localhost:8000/api/all')
		.then(res => res.json())
		.then(data => {
			this.setState({
				restaurants: {
					restaurants: data.restaurants,
					filtered: data.restaurants,
					loaded: true
				}
			});
		});
	}

	get_coords = () => {
		if (navigator.geolocation)
		{
			navigator.geolocation.getCurrentPosition((position) => {
        		this.setState({
          			coords: {
            			lat: position.coords.latitude,
            			lng: position.coords.longitude,
						map_loaded: true
          			}
        		});
    		});
		}
		else {
			this.setState({
				coords: {
					lat: 37.529659,
					lng: -122.040237,
					map_loaded: true
				}
			});
		}
	}
	

	set_category = (e) =>
	{
		if (e.target.value === "All Categories")
		{
			this.setState({
				restaurants: {
					restaurants: this.state.restaurants.restaurants,
					filtered: this.state.restaurants.restaurants,
					loaded: true
				}
			});
		}
		else
			this.setState({
				restaurants: {
					restaurants: this.state.restaurants.restaurants,
					filtered: this.state.restaurants.restaurants.filter(res => res.Category === e.target.value),
					loaded: true
				}
			});
		setTimeout(() => console.log(this.state.restaurants.filtered), 100);
	}

	componentDidMount() {
		this.get_coords();
		this.get_restaurants();
	}

  render() {
	return (
	<div className="App">
  <BrowserRouter>
		{this.state.restaurants.loaded && <Route path="/home" render={(props) => 
			<LandingPage 
				coords			={this.state.coords} 
				user			={this.state.user} 
				get_coords		={this.get_coords} 
				set_category	={this.set_category} 
				category		={this.state.category} 
				restaurants		={this.state.restaurants}
			/>} 
		/> }
		{this.state.restaurants.loaded && <Route path="/login" render={(props) => <Login />} />}
		{this.state.restaurants.loaded && <Route path="/admin" render={(props) => <Admin />} />}
    </BrowserRouter>
	</div>
	);
  }
}

export default App;
