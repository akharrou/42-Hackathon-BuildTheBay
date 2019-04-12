import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import "./map.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./restaurant.css";

export class MapContainer extends React.Component {
	constructor() {
		super();

		this.state = {
		showingInfoWindow: false,
		activeMarker: {},
		selectedPlace: {},
		jkcool: false,
		show: false,
		galleyno: 0,
		galley: [true, false, false],
		galleyload: [
			"https://www.youtube.com/embed/_4H-E7xZwyU",
			"https://media-cdn.tripadvisor.com/media/photo-s/0f/1a/cc/43/sushi-misto.jpg",
			"https://assets3.thrillist.com/v1/image/1559020/size/tmg-slideshow_l.jpg",
		]
	};
		this.onMarkerClick = this.onMarkerClick.bind(this);
		this.onMapClicked = this.onMapClicked.bind(this);
		this.onMouseoutEvent = this.onMouseoutEvent.bind(this);
		this.onMouseoverMarker = this.onMouseoverMarker.bind(this);
		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
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
		console.log("Testing");
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

  onMarkerClick = function(props, marker, e)
	{
		if (this.state.showingInfoWindow) {
			this.setState({
			showingInfoWindow: false,
			activeMarker: null
		  });
		}
		this.handleShow();
	}

	onMouseoverMarker = (props, marker, e) =>
	{
		if (!this.state.showingInfoWindow)
		{
			this.setState({
			  	selectedPlace: props,
			  	activeMarker: marker,
			  	showingInfoWindow: true,
			});
		}
	}

  onMapClicked = function(props) {
    if (this.state.showingInfoWindow) {
      	this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

	onMouseoutEvent = function(props) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
  }


	icon = {
		url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				jkcool: true
			})
		}, 500);
	}

	render() {
		return (
			<>
			<div className="containerMap">
				<Map
					google={this.props.google}
					onClick={this.onMapClicked}
					zoom={16}
					initialCenter={{ lat: this.props.lat, lng: this.props.lng}}>
					{this.props.restaurants.filtered.map(
						restaurant => (
							<Marker onClick={this.onMarkerClick} onMouseover={this.onMouseoverMarker} onMouseout={this.onMouseoutEvent}
								title={restaurant.Name}
								name={restaurant.Name}
								position={{lat: restaurant.lat, lng: restaurant.lng}}
								icon={{
									url: this.icon.url
								}} />
					))}
					<InfoWindow onClick={this.onMarkerClick}
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}>
							<div>
								<h5>{this.state.selectedPlace.name}</h5>
							</div>
					</InfoWindow>
				</Map>

			</div>
				{this.restaurantModal()}
			</>
		);
	}
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB4Q-UgFmuV_DQTRtack4f1txf5AaGCHbo'
})(MapContainer);
