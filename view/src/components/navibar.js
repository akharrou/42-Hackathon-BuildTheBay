import React from "react";
import './navi.css';
//import Popup from 'react-popup';

class Navibar extends React.Component {
	constructor(){
		super();
		this.login_button=this.login_button.bind(this);
	}
	login_button = () => {
		if (this.props.user === null)
			return "I am not logged in";
		else if(this.props.user.is_admin === 1)
			return "I am an admin";
		else if(this.props.user.is_admin === 0)
			return "I am an just a user";
	}
	render(props) {
		// const logged_in = this.props.logged_in;
		// const user = this.user;


		return (
			<div id ="navi_bar" className="navi_bar">
				<div className="iconBar">
				<p className="wTit">Welcome to the E-Guide</p>
					<p className="homeIcon">
						<a href={"./home"}><img className="HomeIcon" src={require('../HomeIcon.png')} alt=""/></a>
						<a id="txt" href={"./home"}>Home</a>
					</p>
					<p className="logIcon">
						<a href={"./login"}><img className="HomeIcon" src={require('../loginicon.jpg')} alt="" /></a>
						<a id="txt" href={"./login"}>Login</a>
					</p>

				</div>
				{this.login_button()}
			</div>
		);		
	}
}

export default Navibar;
