import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import "./map.css";

import Geocode from "react-geocode";

	Geocode.setApiKey("AIzaSyBqKkPlvSSEelPGg4IPqL_2TWyEdYDQeL0");

	Geocode.fromAddress("Eiffel Tower").then(
		response => {
			const { lat, lng } = response.results[0].geometry.location;
			console.log(lat, lng);
		},
		error => {
			console.error(error);
		}
	);

// map function to sort array of restraunt objects, to add to each of them coordinates and distance from user... then to sort and return new array.

export class MapContainer extends React.Component {
//	constructor() {
//		super();
	//	this.state = {
	//		updated: true
	//	}
//	}



	state = {
		showingInfoWindow: false,
		activeMarker: {},
		selectedPlace: {}
	};

//	componentWillReceiveProps() {
//		this.setState({
//			updated: !(this.state.updated)
//		});
//	};


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
	};

	render() {
		return (
			<div className="containerMap">
				<Map
					google={this.props.google}
					onClick={this.onMapClicked}
					zoom={13}
					initialCenter={{ lat: this.props.lat, lng: this.props.lng}}>
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
					<InfoWindow
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}>
							<div>
								<p>{this.state.selectedPlace.name}</p>
								<p>{this.state.selectedPlace.info}</p>
								<p onClick="open_info()">More Info</p>
							</div>
					</InfoWindow>
				</Map>
			</div>
		);
	}
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB4Q-UgFmuV_DQTRtack4f1txf5AaGCHbo'
})(MapContainer);
