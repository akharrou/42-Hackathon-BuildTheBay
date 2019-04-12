import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import "./map.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./restaurant.css";
import "./mediaIcons.css";

export class MapContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			props: {},
		showingInfoWindow: false,
		activeMarker: {},
		selectedPlace: {},
		jkcool: false,
		show: false,
		galleyno: 0,
	};
		this.onMarkerClick = this.onMarkerClick.bind(this);
		this.onMapClicked = this.onMapClicked.bind(this);
		this.onMouseoutEvent = this.onMouseoutEvent.bind(this);
		this.onMouseoverMarker = this.onMouseoverMarker.bind(this);
		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	restaurantModal(props) {
		return (

			<Modal className="restaurantPopup" show={this.state.show} onHide={this.handleClose}>
				<Modal.Header className="modalHeader">{props.name}</Modal.Header>
				<div className="restaurantGallery">
					<span className="prev" onClick={() => this.plusSlides(-1, props)}>&#10094;</span>
					<span className="next" onClick={() => this.plusSlides(1, props)}>&#10095;</span>
					{this.slideshow(props)}
				</div>
				<Modal.Body>
					<p className="restaurantModalInfo">Type: {props.category} </p>
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

	slideshow(props) {
		if (!props.gallery || props.gallery[0] === undefined)
				return (<img alt="" className="restPict" src="https://twolovesstudio.com/wp-content/uploads/2017/05/99-Best-Food-Photography-Tips-5-1.jpg"></img>);

		if (props.gallery[this.state.galleyno].type === "Video")
		{
			return (
				<iframe title="frame" className="restVideo" src={props.gallery[this.state.galleyno].link}></iframe>
			);
		}
		else
			return (
				<img alt="" className="restPict" src={props.gallery[this.state.galleyno].link}></img>
			);
	}

	plusSlides(num, props) {
		this.state.galleyno = this.state.galleyno + num;
		if (this.state.galleyno < 0)
			this.setState({galleyno: props.gallery.length - 1});
		else if (this.state.galleyno >= props.gallery.length)
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
		this.setState({props: {name: props.name, category: props.category, gallery: props.gallery}});
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
		}, 1000);
	}

	get_link(restaurant) {
		if (restaurant.Media[0] === undefined)
			return ("https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/3/22/0/FNCC_bobby-flay-salmon-brown-sugar-mustard_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382541357316.jpeg");
		else
			return (restaurant.Media[0].link);
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
					{this.props.restaurants.filtered.map((restaurant) => (
							<Marker onClick={this.onMarkerClick} onMouseover={this.onMouseoverMarker} onMouseout={this.onMouseoutEvent}
								name={restaurant.Name}
								category={restaurant.Category}
								position={{lat: restaurant.lat, lng: restaurant.lng}}
								gallery={restaurant.Media}
								mainPhoto={this.get_link(restaurant)}
								icon={{
									url: this.icon.url
								}} />
						)
					)}
					<InfoWindow onClick={this.onMarkerClick}
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}>
							<div>
								<h5>{this.state.selectedPlace.name}</h5>
							</div>
					</InfoWindow>
				</Map>

			</div>
				{this.restaurantModal(this.state.props)}
			</>
		);
	}
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB4Q-UgFmuV_DQTRtack4f1txf5AaGCHbo'
})(MapContainer);
