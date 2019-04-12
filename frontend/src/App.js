import React, { Component } from 'react';
import './App.css';
import Login from './components/login.js';
import LandingPage from './components/main.js';
import Admin from './components/admin.js'
import Suadmin from './components/suadmin.js'
import Sulogin from './components/SuperLogin.js'
import { BrowserRouter, Route } from 'react-router-dom';
import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyBqKkPlvSSEelPGg4IPqL_2TWyEdYDQeL0");

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
      user: null,
	  search: ""
    }
		this.get_coords = this.get_coords.bind(this);
		this.set_category = this.set_category.bind(this);
		this.get_restaurants = this.get_restaurants.bind(this);
		this.get_sortedArray = this.get_sortedArray.bind(this);
		this.handle_search = this.handle_search.bind(this);
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

	get_sortedArray = ()  => {
		const restaurants = this.state.restaurants.filtered;
		for(let i = 0; i < restaurants.length; i++)
		{
			Geocode.fromAddress(restaurants[i].Address).then(
				response => {
					const current_lat = this.state.coords.lat;
					const current_lng = this.state.coords.lng;
					const { lat, lng } = response.results[0].geometry.location;
					restaurants[i]['lat'] = lat;
					restaurants[i]['lng'] = lng;
					var dist = this.distance(current_lat, current_lng, lat, lng);
					restaurants[i]['distance'] = dist;
				},
				error => {
					console.error(error);
				}
			)
		}
		setTimeout(() => {
			restaurants.sort(function(a, b) {
				if (!a.distance || a.distance > b.distance)
				{
					return (1);
				}
				else if (!b.distance || b.distance > a.distance)
				{
					return (-1);
				}
				else
				{
					return 0;
				}
			});
		}, 1);
		this.setState({
			restaurants: {
				restaurants: restaurants,
				filtered: restaurants,
				loaded: true
			}
		});

	};

	handle_search = (value) =>
	{
		if (value !== "")
		{
			this.setState({
				search: value.toLowerCase()
			}, () => {
				this.setState({
					restaurants: {
						restaurants: this.state.restaurants.restaurants,
						filtered: this.state.restaurants.restaurants.filter(res => res.Name.toLowerCase().indexOf(this.state.search) !== -1),
						loaded: true
					}
				 })
			})
		}
		else
		{
			this.setState({
				search: value
			}, () => {
				this.setState({
					restaurants: {
						restaurants: this.state.restaurants.restaurants,
						filtered: this.state.restaurants.restaurants,
						loaded: true
					}
				 })
			})
		}
		console.log(this.state.search);
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
				},
				category: e.target.value
			});
		}
		else
			this.setState({
				restaurants: {
					restaurants: this.state.restaurants.restaurants,
					filtered: this.state.restaurants.restaurants.filter(res => res.Category === e.target.value),
					loaded: true
				},
				category: e.target.value
			});
	}
	degreesToRadians = (degrees) => {
		return degrees * Math.PI / 180;
	}

	distance = (lat1, lon1, lat2, lon2) => {
		var earthRadiusKm = 6371;

		var dLat = this.degreesToRadians(lat2-lat1);
		var dLon = this.degreesToRadians(lon2-lon1);

		lat1 = this.degreesToRadians(lat1);
		lat2 = this.degreesToRadians(lat2);

		var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
						Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
		const km_to_miles = 0.62137;
		return km_to_miles * (earthRadiusKm * c);
	}

	componentDidMount() {
		this.get_coords();
		this.get_restaurants();
		setTimeout (() => {
			this.get_sortedArray();
		}, 1000);
	}

  render() {
	return (
	<div className="App">
  <BrowserRouter>
		{this.state.restaurants.loaded && <Route path="/home" render={(props) =>
			<LandingPage
				coords				={this.state.coords}
				user					={this.state.user}
				get_coords		={this.get_coords}
				set_category	={this.set_category}
				category			={this.state.category}
				restaurants		={this.state.restaurants}
				handle_search	={this.handle_search}
			/>}
		/> }

		{this.state.restaurants.loaded && <Route path="/login" render={(props) => <Login />} />}
		{this.state.restaurants.loaded && <Route path="/SuperLogin" render={(props) => <Sulogin />} />}
		{this.state.restaurants.loaded && <Route path="/admin" render={(props) => <Admin />} />}
		{this.state.restaurants.loaded && <Route path="/suadmin" render={(props) => <Suadmin />} />}
    </BrowserRouter>
	</div>
	);
  }
}

export default App;
