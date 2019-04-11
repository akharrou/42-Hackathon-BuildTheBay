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
			</div>
		</div>
		);
	}
}

export default Filter;
