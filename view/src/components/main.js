import React from 'react';


import Navibar from './navibar.js';
import Map from './map.js';
import Filter from './filter.js';
import RestaurantList from './restaurantlist.js';

class LandingPage extends React.Component {
	render (props) {
		console.log("from main, " + this.props.coords.map_loaded);
		return (
			<>
				<Navibar user={this.props.user}/>
				<Map get_coords={this.props.get_coords} lat={this.props.coords.lat} lng={this.props.coords.lng} map_loaded={this.props.coords.map_loaded}/>
				<Filter set_category={this.props.set_category}/>
				<RestaurantList />
			</>
		);
	}
}

export default LandingPage;
