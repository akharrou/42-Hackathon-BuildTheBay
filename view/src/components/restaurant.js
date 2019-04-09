import React from "react";
import "./restaurant.css";

class RestaurantItem extends React.Component {

	render () {
		return (
			<div className="restaurant">
				<div className="restaurant_photo">
					[Photo here]
				</div>
				<p className="restaurantHeader">[Restaurant Name Here]</p>
				<p className="restaurantInfo">[Table list]</p>
				<div className="restaurantIcons">[Icons]</div>
			</div>
		);
	}
}

export default RestaurantItem;