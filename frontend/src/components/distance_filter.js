import React from "react";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

class DistanceFilter extends React.Component {
	render() {
		return (
			<DropdownButton id="dropdown-basic-button" title="Distance">
				  <Dropdown.Item href="#/action-1">1 mile</Dropdown.Item>
				  <Dropdown.Item href="#/action-1">2 miles</Dropdown.Item>
				  <Dropdown.Item href="#/action-1">5 miles</Dropdown.Item>
				  <Dropdown.Item href="#/action-2">10 miles</Dropdown.Item>
				  <Dropdown.Item href="#/action-3">15+ miles</Dropdown.Item>
			</DropdownButton>
			
		);
	}
}

 export default DistanceFilter;
