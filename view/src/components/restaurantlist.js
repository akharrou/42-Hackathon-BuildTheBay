import React from "react";
import RestaurantItem from './restaurant.js'
import "./restaurant.css";

class RestaurantList extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
		};
	}

	render () {
		return (
			<div className="container-restaurants">
			{this.props.restaurants.filtered.map(restaurant => (
				<RestaurantItem name={restaurant.Name} category={restaurant.Category} price="$" />
				))}
			</div>
		);
	}
}

export default RestaurantList;
