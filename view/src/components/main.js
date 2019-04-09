import React from 'react';


import Navibar from './navibar.js';
import Map from './map.js';
import Filter from './filter.js';
import RestaurantList from './restaurantlist.js';

class LandingPage extends React.Component {
	render (props) {
		console.log(this.props);
		return (
			<>
				<Navibar user={this.props.user}/>
				<Map get_coords={this.props.get_coords} lat={this.props.coords.lat} lng={this.props.coords.lng}/>
				{/* <Filter /> */}
				<RestaurantList />
			</>
		);
	}
}

export default LandingPage;
