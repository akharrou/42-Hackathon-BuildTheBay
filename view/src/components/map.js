import React from 'react';
import { Map, GoogleApiWrapper }
function initMap() {
	return (new google.maps.Map(document.getElementById('c_map'), {
	  center: {lat: 37.529659, lng: -122.040237},
	  zoom: 15
	}));
}

const map = () => {
	var map;
	map = initMap();
	<div id="filter"></div>
	<div id="restaurant"></div>
	<div id="restaurant"></div>

		<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB4Q-UgFmuV_DQTRtack4f1txf5AaGCHbo&callback=initMap"async defer></script>
}
