import React from "react";
import "./restaurant.css";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class RestaurantItem extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			show: false,
		};
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

	render () {
		return (
			<>
				<div>
					<Modal className="restaurantPopup" show={this.state.show} onHide={this.handleClose}>
						<h className="PopupHeading">[Restaurant Name Here]</h>
						<Modal.Body>Something</Modal.Body>
							<Button variant="secondary" onClick={this.handleClose}>
								Close
							</Button>
					</Modal>
				</div>

				<div>
					<div className="restaurant" onClick={this.handleShow}>
						<div className="restaurant_photo">
							[Photo here]
						</div>
						<p className="restaurantHeader">[Restaurant Name Here]</p>
						<p className="restaurantInfo">[Closing Time] [Category] [Avg Price] [Distane]</p>
						<p className="restaurantInfo">[Table list]</p>
						<div className="restaurantIcons">
							[Icons]
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default RestaurantItem;
