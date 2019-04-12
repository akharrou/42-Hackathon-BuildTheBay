import React from 'react';


import Navibar from './navibar.js';
import Map from './map.js';
import Filter from './filter.js';
import RestaurantList from './restaurantlist.js';

class LandingPage extends React.Component {
constructor() {
	super();
	this.state = {
		jkcool: true
	};
}

componentDidMount() {
		setTimeout(() => {
			this.setState({
				jkcool: true
			})
		}, 1000);
	}

	render (props) {
		return (
			<>
				<Navibar user={this.props.user}/>
				<Map 
					get_coords={this.props.get_coords} 
					lat={this.props.coords.lat} 
					lng={this.props.coords.lng} 
					map_loaded={this.props.coords.map_loaded} 
					category={this.props.category} 
					restaurants={this.props.restaurants}
				/>
				<Filter set_category={this.props.set_category} handle_search={this.props.handle_search} set_ratings={this.props.set_ratings} set_distance={this.props.set_distance}  />
				<RestaurantList restaurants={this.props.restaurants}/>
			</>
		);
	}
}

export default LandingPage;
