import React from 'react';
import SideBar from './admin_sidebar.js';

class Admin extends React.Component {
    constructor() {
        super();
        this.state = {
            view: 'welcome'
        }
    }

    render() {
        return (
            <SideBar />
        )
    }
}

export default Admin;