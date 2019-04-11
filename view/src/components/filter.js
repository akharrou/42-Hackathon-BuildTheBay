import React from "react";
import "./filter.css";
import DistanceFilter from "./distance_filter.js";

class Filter extends React.Component {
	render() {
		// const logged_in = this.props.logged_in;
		// const user = this.user;

		return (
		<div className="filter">
			<div className="title">
				{/*<Main_dropdown />*/}
				<DistanceFilter />
				<select className="field">
            		<option>Distance</option>
            		<option>5 miles</option>
            		<option>10 miles</option>
            		<option>20 miles</option>
        		</select>
				<select className="field">
					<option>Category</option>
            		<option>American</option>
            		<option>Bakery</option>
            		<option>Chinese</option>
            		<option>Coffee&Bubble Tea</option>
					<option>Fast Food</option>
					<option>Grocery Markets</option>
					<option>Ice Cream&Desserts</option>
					<option>Indian</option>
					<option>International&Wine Bar</option>
					<option>Island</option>
					<option>Japanese</option>
					<option>Korean</option>
					<option>Mexican</option>
					<option>Pizza</option>
					<option>Game For Kids&Families</option>
					<option>Thai</option>
					<option>Vietnamese</option>
        		</select>
				<select className="field">
					<option>Rating</option>
            		<option>High to Low</option>
					<option>Low to High</option>
        		</select>
				<select className="field">
					<option>Open Till</option>
					<option>Open Now</option>
            		<option>30 mins</option>
            		<option>1 Hour</option>
            		<option>2 Hours</option>
        		</select>
			</div>
		</div>
		);
	}
}

export default Filter;
