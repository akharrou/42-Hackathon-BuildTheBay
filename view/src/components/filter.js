import React from "react";
import "./filter.css";
//import { Category_filter } from "./category_filter.js";

class Filter extends React.Component {
	render() {
		// const logged_in = this.props.logged_in;
		// const user = this.user;

		return (
		<div className="filter">
			<div className="title">
				<button type="button" className="btn btn-primary">Primary</button>
				<span className="field">Distance</span>
				<span className="field">Category</span>
				<span className="field">Distance</span>
				<span className="field">Distance</span>
			</div>
		</div>
		);
	}
}

export default Filter;
