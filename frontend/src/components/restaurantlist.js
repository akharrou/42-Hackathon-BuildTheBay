import React from "react";
import RestaurantItem from './restaurant.js'
import "./restaurant.css";

class RestaurantList extends React.Component {
	constructor (props) {
		super(props);
	}

	get_link(restaurant) {
		if (restaurant.Media[0] === undefined)
			return ("https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/3/22/0/FNCC_bobby-flay-salmon-brown-sugar-mustard_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382541357316.jpeg");
		else
			return (restaurant.Media[0].link);
	}

	render () {
		return (
			<div className="container-restaurants">
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
			{this.props.restaurants.filtered.map(restaurant => (
				<RestaurantItem
					name={restaurant.Name}
					category={restaurant.Category}
					distance={restaurant.distance}
					describ={restaurant.Description}
					gallery={restaurant.Media}
					price="$"
					mainPhoto={this.get_link(restaurant)}/>
				))}
			</div>
		);
	}
}

export default RestaurantList;
