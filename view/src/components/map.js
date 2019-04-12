import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import "./map.css";

export class MapContainer extends React.Component {
	constructor() {
		super();
		this.state = {
		showingInfoWindow: false,
		activeMarker: {},
		selectedPlace: {}
	};
		this.onMarkerClick = this.onMarkerClick.bind(this);
		this.onMapClicked = this.onMapClicked.bind(this);
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
