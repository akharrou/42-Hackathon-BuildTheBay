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
	  category: null,
      user: null
    }
		this.get_coords = this.get_coords.bind(this);
		this.set_category = this.set_category.bind(this);
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
		setTimeout(() => console.log(this.state), 1000)
	}

	set_category = (category) =>
	{
		this.setState({
			category: category
		});
		console.log("The current category is "+ category);
	}

	componentDidMount() {
		this.get_coords();
	}

  render() {
	return (
	<div className="App">
  <BrowserRouter>
    <Route path="/home" render={(props) => <LandingPage coords={this.state.coords} user={this.state.user} get_coords={this.get_coords} set_category={this.set_category} />} />
    <Route path="/login" render={(props) => <Login />} />
    <Route path="/admin" render={(props) => <Admin />} />
    </BrowserRouter>
	</div>
	);
  }
}

export default App;
