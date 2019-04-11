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
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
			{this.props.restaurants.filtered.map(restaurant => (
				<RestaurantItem name={restaurant.Name} category={restaurant.Category} price="$" />
				))}
			</div>
		);
	}
}

export default RestaurantList;
