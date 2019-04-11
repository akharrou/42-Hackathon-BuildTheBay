import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import "./map.css";

import Geocode from "react-geocode";

	Geocode.setApiKey("AIzaSyBqKkPlvSSEelPGg4IPqL_2TWyEdYDQeL0");
	

	// distance formula
	function degreesToRadians(degrees) {
		return degrees * Math.PI / 180;
	}

	function distance(lat1, lon1, lat2, lon2) {
		var earthRadiusKm = 6371;

		var dLat = degreesToRadians(lat2-lat1);
		var dLon = degreesToRadians(lon2-lon1);

		lat1 = degreesToRadians(lat1);
		lat2 = degreesToRadians(lat2);

		var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
						Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
		const km_to_miles = 0.62137;
		return km_to_miles * (earthRadiusKm * c);
	}

	var restraunts = 
	[
	{
		name: "Cantina",
		address: '42 Silicon Valley dorms',
		category: "meh"
	},
	{
		name: "Place to take a selfie",
		address: 'Golden Gate Bridge',
		category: "meh"
	},
	{
		name: "Where 42 students work",
		address: 'Tesla, Fremont',
		category: "meh"
	},
	{
		name: "Coding House",
		address: '42 Silicon Valley',
		category: "meh"
	}
	];

	function compare(a, b)
	{
		if (a > b)
		{
			return (1);
		}
		else if (b > a)
		{
			return (-1);
		}
		else
		{
			return 0;
		}
	};

	function sortedArray(restraunts, current_lat, current_lng) {
		var new_array = restraunts.map(function(restraunt) {
			Geocode.fromAddress(restraunt.address).then(
				response => {
					const { lat, lng } = response.results[0].geometry.location;
					console.log('coordinates: ' + lat, lng);
					const dist = distance(current_lat, current_lng, lat, lng);
					console.log('distance: ' + dist);
					Object.assign(restraunt, {dist});
					return restraunt;
				},
				error => {
					console.error(error);
				}
			); 
		});
		return (new_array.sort(compare));
	};	

export class MapContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			showingInfoWindow: false,
			activeMarker: {},
			selectedPlace: {}
		};
		this.create_map = this.create_map.bind(this);
	}


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

	create_map = () => {
		if (this.props.map_loaded)
		{
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
				</div>);
			}
		else
			return (<p>Map is loading</p>);
	}

	icon = {
		url: "/path/to/custom_icon.png",
		anchor: {},
		scaledsize: {}
	};
	icon = {
		url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
	};


	render() {
		return (
			this.create_map()
		);
	}
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB4Q-UgFmuV_DQTRtack4f1txf5AaGCHbo'
})(MapContainer);
