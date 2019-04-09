import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import "./map.css";

export class MapContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			updated: true
		}
	}

	componentWillReceiveProps() {
		this.setState({
			updated: !(this.state.updated)
		});
	}

	render() {
		return (
			<div className="containerMap">
				<Map
					google={this.props.google}
					zoom={15}
					initialCenter={{ lat: this.props.coords.lat, lng: this.props.coords.lng}}
				/>
			</div>
		);
	}
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB4Q-UgFmuV_DQTRtack4f1txf5AaGCHbo'
})(MapContainer);
