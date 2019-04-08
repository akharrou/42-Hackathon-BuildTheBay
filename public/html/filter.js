// import React from "react";
import { Category_filter } from "./category_filter";

class Filter extends React.Component {
	render() {
		// const logged_in = this.props.logged_in;
		// const user = this.user;

		return (
		<div id="filter" className="filter">
			<div className="title">
				<button type="button" className="btn btn-primary">Primary</button>
				<Category_filter />
				<span className="field">Distance</span>
				<span className="field">Category</span>
				<span className="field">Distance</span>
				<span className="field">Distance</span>
			</div>
		</div>
		);
	}
}

ReactDOM.render(
	<Filter />,
	document.getElementById('filter')
);

// export default Filter;
