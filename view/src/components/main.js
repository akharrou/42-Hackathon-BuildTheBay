import React from 'react';
import RestaurantList from './restaurantlist.js';
import Navibar from './navibar.js';
import Map from './map.js';

class LandingPage extends React.Component {
	constructor(){
		super();
		this.state = {};
	  }	

	render (props) {
		console.log("Testing");
		return (
			<>
				<Navibar user={this.props.user}/>
				<Map get_coords={this.props.get_coords} coords={this.props.coords} user={this.props.user}/>
				<RestaurantList />
			</>
		);
	}
}

export default LandingPage;

