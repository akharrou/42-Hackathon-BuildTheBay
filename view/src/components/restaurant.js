import React from "react";
import "./restaurant.css";
import "./mediaIcons.css";

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
		if (this.state.galleyno === 0)
		{
			return (
				<iframe title="frame" className="restVideo" src={this.state.galleyload[this.state.galleyno]}></iframe>
			);
		}
		else
			return (
				<img alt="" className="restPict" src={this.state.galleyload[this.state.galleyno]}></img>
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
						<span href="#" className="fa fa-twitter"></span>
						<span href="#" className="fa fa-facebook"></span>
						<span href="#" className="fa fa-pinterest"></span>
						<span href="#" className="fa fa-snapchat-ghost"></span>
					</div>
				</div>
			</div>
		);
	}

	restaurantModal() {
		return (

			<Modal className="restaurantPopup" show={this.state.show} onHide={this.handleClose}>
				<Modal.Header className="modalHeader">{this.props.name}</Modal.Header>
				<div className="restaurantGallery">
					<span className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</span>
					<span className="next" onClick={() => this.plusSlides(1)}>&#10095;</span>
					{this.slideshow()}
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
