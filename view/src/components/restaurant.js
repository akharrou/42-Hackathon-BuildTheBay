import React from "react";
import "./restaurant.css";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class RestaurantItem extends React.Component {
	constructor(props) {
		super(props);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			show: false,
			galleyno: 0,
			galley: [true, false, false],
			galleyload: [
				"https://www.youtube.com/embed/_4H-E7xZwyU",
				"https://media-cdn.tripadvisor.com/media/photo-s/0f/1a/cc/43/sushi-misto.jpg",
				"https://assets3.thrillist.com/v1/image/1559020/size/tmg-slideshow_l.jpg",
			]
		};
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

	slideshow() {
		if (this.state.galleyno == 0)
		{
			return (
				<iframe className="restVideo" src={this.state.galleyload[this.state.galleyno]}></iframe>
			);
		}
		else
			return (
				<img className="restPict" src={this.state.galleyload[this.state.galleyno]}></img>
			);
	}

	plusSlides(num) {
		this.state.galleyno = this.state.galleyno + num;
		if (this.state.galleyno < 0)
			this.setState({galleyno: this.state.galleyload.length - 1});
		else if (this.state.galleyno >= this.state.galleyload.length)
			this.setState({galleyno: 0});
		else
			this.setState({galleyno: this.state.galleyno});
	}

	restaurantCard() {
		return (
			<div>
				<div className="restaurant" onClick={this.handleShow}>
					<div className="restaurant_photo">
						[Photo here]
					</div>
					<p className="restaurantHeader">{this.props.name}</p>
					<p className="restaurantInfo">Type: {this.props.category} | Price: {this.props.price} | [??Distane??]</p>
					<p className="restaurantInfo">[Table list]</p>
					<div className="restaurantIcons">
						[Icons]
					</div>
				</div>
			</div>
		);
	}

	restaurantModal() {
		return (

			<Modal className="restaurantPopup" show={this.state.show} onHide={this.handleClose}>
				<Modal.Header>[Restaurant Name]</Modal.Header>
				<div className="restaurantGallery">
					<a className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
					<a className="next" onClick={() => this.plusSlides(1)}>&#10095;</a>
					() => {this.slideshow()}
				</div>
				<Button variant="secondary" onClick={this.handleClose}>
					Close
				</Button>
			</Modal>
		);
	}

	render () {
		return (
			<>
				{this.restaurantModal()}

				{this.restaurantCard()}
			</>
		);
	}
}

export default RestaurantItem;
