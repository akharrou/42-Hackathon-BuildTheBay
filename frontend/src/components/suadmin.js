import React from 'react';
import SideBar from './supsidebar.js';
import Supedituser from './supedituser.js';

class Suadmin extends React.Component {
    constructor() {
        super();
        this.state = {
            view: 'editUser'
        }
		this.change_page = this.change_page.bind(this);
    }

	change_page = (page) => {
        this.setState({
            view: page
		})
    }

    render() {
        return (
            <>
        	    <SideBar change_page={this.change_page}/>
            {this.state.view === 'editUser' && <Supedituser />}
			</>
        )
    }
}

export default Suadmin;
