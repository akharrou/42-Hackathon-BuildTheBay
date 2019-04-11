import React from 'react';
import Sidebar from 'admin_sidebar.js';

class Admin extends React.Component {
    constructor() {
        super();
        this.state = {
            view: 'welcome'
        }
    }

    render() {
        return (
            <Sidebar />
        )
    }
}