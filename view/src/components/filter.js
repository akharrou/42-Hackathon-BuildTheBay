import React from "react";
import "./filter.css";
import CategoryFilter from "./category_filter";

class Filter extends React.Component {
	constructor() {
		super();
		this.state = {
			categories: null,
			categories_loaded: false
		}
		this.get_categories = this.get_categories.bind(this);
	}
	
		get_categories = () => {
			fetch('http://localhost:8000/api/categories')
			.then(res => res.json())
			.then(data => {
				this.setState({
					categories: data.categories,
					categories_loaded: true
				})
			});
		}

	componentDidMount() {
		this.get_categories();
	}

	render() {
		return (
		<div className="filter">
			<div className="title">
				{/*<Main_dropdown />*/}
				<CategoryFilter handle_search={this.props.handle_search}/>
				<select className="field">
            		<option>Distance</option>
            		<option>5 miles</option>
            		<option>10 miles</option>
            		<option>20 miles</option>
        		</select>
				<select onChange={this.props.set_category} value={this.props.category} className="field">
					<option>All Categories</option>
					{this.state.categories_loaded && this.state.categories.map(category => (
						<option key={category}>{category}</option>
					))}
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
