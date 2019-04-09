import React from 'react';
import RestaurantList from './restaurantlist.js';
import Navibar from './navibar.js';
import Map from './map.js';

class LandingPage extends React.Component {
	// constructor() {
	// 	super(props);
	// }

	render (props) {
		console.log(this.props);
		return (
			<>
				<Navibar user={this.props.user}/>
				<Map get_coords={this.props.get_coords} lat={this.props.coords.lat} lng={this.props.coords.lng}/>
				<RestaurantList />
			</>
		);
	}
}

export default LandingPage;

