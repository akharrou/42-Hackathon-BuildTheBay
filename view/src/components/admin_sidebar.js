import React from 'react';
import './sidebar.css';


const SideBar = () => {
        return (
            <div class="wrapper">
            <aside class="main_sidebar">
                <ul>
                    <li><i class="fa fa-arrows"></i><a href="#">Welcome</a></li>
                    <li><i class="fa fa-battery-2"></i><a href="#">Edit information</a></li>
                    <li><i class="fa fa-battery-2"></i><a href="#">Comments</a></li>
                </ul>
            </aside>
            <div class="main">
                <h1></h1>
            </div>
        </div> 
        )
    }

    export default SideBar;