import React from 'react';
import SideBar from './admin_sidebar.js';
import Adminpage from './adminpage.js';

class Admin extends React.Component {
    constructor() {
        super();
        this.state = {
            view: 'edit',
            user: null,
            logged_in: false
        }
		this.change_page = this.change_page.bind(this);
    }

	change_page = (page) => {
		this.setState({
			view: page
		})
    }

    componentDidMount() {
		if (localStorage.hasOwnProperty('user')) {
			this.setState({
				user: localStorage.getItem('user'),
				logged_in: true
			});
		}
		setTimeout(() => console.log(this.state), 1000);
    }

    render() {
        return (
            // {this.state.logged_in &&
			<>
        	    <SideBar change_page={this.change_page}/>
				{this.state.logged_in === true && <Adminpage user={this.state.user}/>}
			</>
        )
    }
}

export default Admin;
