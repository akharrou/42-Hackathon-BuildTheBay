import React from "react";
import RestaurantItem from './restaurant.js'
import "./restaurant.css";

class RestaurantList extends React.Component {

	createList = () => {
		let list = []

		for (let i = 0; i < 6; i++) {
			list.push(< RestaurantItem />)
		}
		return list;
	}

	render () {
		return (
			<div className="container-restaurants">
				{this.createList()}
			</div>
		);
	}
}

export default RestaurantList;
