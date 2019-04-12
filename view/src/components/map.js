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
		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleShow();
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

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

	icon = {
		url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
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
							<Marker onClick={this.onMarkerClick}
								title={restaurant.Name}
								name={restaurant.Name}
								position={{lat: restaurant.lat, lng: restaurant.lng}}
								icon={{
									url: this.icon.url
								}} />
					))}
					<Marker onClick={this.onMarkerClick}
						title={'The marker`s title will appear as a tooltip.'}
						name={'SOMA'}
						position={{lat: 37.778519, lng: -122.405640}}
						icon={{
							url: this.icon.url,
							anchor: this.icon.anchor,
							scaledSize: this.icon.scaledSize
						}}
					/>
					<Marker onClick={this.onMarkerClick}
						title={'The marker`s title will appear as a tooltip.'}
						name={'Dolores park'}
						position={{lat: 37.759703, lng: -122.428093}}
						icon={{
							url: this.icon.url,
							anchor: this.icon.anchor,
							scaledSize: this.icon.scaledSize
						}}
					/>
					<Marker onClick={this.onMarkerClick}
						title={'The marker`s title will appear as a tooltip.'}
						name={'Your position'}
						position={{lat: 37.762391, lng: -122.439192}}
						icon={{
							url: this.icon.url,
							anchor: this.icon.anchor,
							scaledSize: this.icon.scaledSize
						}}
					/>
					<InfoWindow onClick={this.handleShow}
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}>
							<div>
								<p>{this.state.selectedPlace.name}</p>
								<p>{this.state.selectedPlace.info}</p>
								<button>More Info</button>
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
