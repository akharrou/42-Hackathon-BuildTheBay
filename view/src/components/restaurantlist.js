import React from "react";
import RestaurantItem from './restaurant.js'
import "./restaurant.css";

class RestaurantList extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			data: [
				{name: "HappyLemon", category: "Tea Cafe", price: "$"},
				{name: "Wok Life", category: "Chinese", price: "$"},
				{name: "La Farfalla", category: "Bakery", price: "$"},
				{name: "Malaikottai", category: "Indian", price: "$$"},
				{name: "Sushi Yoshi Restaurant", category: "Japanese", price: "$$"},
			],
		};
	}

	createList = () => {
		let list = []

		for (let i = 0; i < this.state.data.length; i++) {
			list.push(< RestaurantItem 
				name={this.state.data[i].name}
				category={this.state.data[i].category}
				price={this.state.data[i].price}
			/>)
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
