import React from 'react';
import SideBar from './admin_sidebar.js';
import Adminpage from './adminpage.js';

class Admin extends React.Component {
    constructor() {
        super();
        this.state = {
            user: null,
            logged_in: false
        }
		this.logout = this.logout.bind(this);
    }

	logout = () => {
		localStorage.removeItem('user');
		window.location = 'http://localhost:3000/login';
	}

    componentDidMount() {
		if (localStorage.hasOwnProperty('user')) {
			this.setState({
				user: localStorage.getItem('user'),
				logged_in: true
			});
		}
    }

    render() {
        return (
            // {this.state.logged_in &&
			<>
				{this.state.logged_in === true && <Adminpage user={this.state.user}/>}
				{this.state.logged_in === true && <SideBar logout={this.logout}/>}
			</>
        )
    }
}

export default Admin;
