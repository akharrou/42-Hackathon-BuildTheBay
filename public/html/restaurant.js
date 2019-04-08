// import React from "react";

class Restaurant extends React.Component {
	render() {
		return (
			<div className="restaurant">
							<img src="https://cdncontribute.geeksforgeeks.org/wp-content/uploads/GG-2.png"
            	 className="img-responsive" alt="Responsive image"
				 width="10%" />
			</div>
		);
	}
}

ReactDOM.render(
	<Restaurant />,
	document.getElementById('restaurant')
);

// export default Restaurant;
