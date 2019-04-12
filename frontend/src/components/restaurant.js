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
		};
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
				<Modal.Body>
					<p className="restaurantModalInfo">Type: {this.props.category} </p>
					<p className="restaurantModalBody">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</Modal.Body>
				<Button variant="secondary" onClick={this.handleClose}>
					Close
				</Button>
			</Modal>
		);
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

	slideshow() {
		if (this.props.gallery[0] === undefined)
			return (<img alt="" className="restPict" src="https://twolovesstudio.com/wp-content/uploads/2017/05/99-Best-Food-Photography-Tips-5-1.jpg"></img>);


		console.log(this.props.gallery[this.state.galleyno].type);
		if (this.props.gallery[this.state.galleyno].type === "Video")
		{
			return (
				<iframe title="frame" className="restVideo" src={this.props.gallery[this.state.galleyno].link}></iframe>
			);
		}
		else
			return (
				<img alt="" className="restPict" src={this.props.gallery[this.state.galleyno].link}></img>
			);
	}

	plusSlides(num) {
		this.state.galleyno = this.state.galleyno + num;
		if (this.state.galleyno < 0)
			this.setState({galleyno: this.props.gallery.length - 1});
		else if (this.state.galleyno >= this.props.gallery.length)
			this.setState({galleyno: 0});
		else
			this.setState({galleyno: this.state.galleyno});
	}

	restaurantCard() {
		return (
			<div>
				<div className="restaurant" onClick={this.handleShow}>
					<div className="restaurant_photo">
						<img className="restaurant_image" src={this.props.mainPhoto}></img>
					</div>
					<p className="restaurantHeader">{this.props.name}</p>
					<p className="restaurantInfo">Type: {this.props.category} | Price: {this.props.price} | Distance: {parseFloat(this.props.distance).toPrecision(2)}</p>
					<p className="restaurantDesc">Description: {this.props.describ.substring(0, 130)}</p>
					<div className="restaurantIcons">
						<a href="https://twitter.com/?lang=en" className="fa fa-twitter" target="_blank" rel="noopener noreferrer"></a>
						<a href="https://www.facebook.com/" className="fa fa-facebook" target="_blank" rel="noopener noreferrer"></a>
						<a href="https://www.pinterest.com/" className="fa fa-pinterest" target="_blank" rel="noopener noreferrer"></a>
						<a href="https://www.snapchat.com/" className="fa fa-snapchat-ghost" target="_blank" rel="noopener noreferrer"></a>
					</div>
				</div>
			</div>
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
