import React from "react";

class Current_user extends React.Component {
	constructor(props) {
		// super(props);

//<-----Fetch through cookies or something the current user and pass it in----------------->
		this.state = {
			logged_in: false,
			user: ""
		}
//<-----Fetch through cookies or something the current user and pass it in----------------->
		this.logged_in = true;
		this.user_info = "me"
	}

	get_log = () => {
		return (this.logged_in);
	}

	get_user = () => {
		return (this.user)
	}
}

export default Current_user;
