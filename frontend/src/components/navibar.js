import React from "react";
import './navi.css';

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
		return (
			<div id ="navi_bar" className="navi_bar">
				<div className="iconBar">
				<p className="wTit">Welcome to Newark, CA</p>
					<p className="homeIcon">
						<a href={"./home"}><img src={require('../HomeIcon.png')} alt = "" /></a>
						<a id="txtH" href={"./home"}>Home</a>
					</p>
					<p className="logIcon">
						<a href={"./login"}><img src={require('../loginicon.png')} alt="" /></a>
						<a id="txt" href={"./login"}>Login</a>
					</p>
				</div>
			</div>
		);
	}
}

export default Navibar;
