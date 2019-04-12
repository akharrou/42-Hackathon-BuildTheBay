import React from 'react';
import './sidebar.css';


const SideBar = (props) => {
        return (
            <div className="wrapper">
            <p className="homeBtn">
					<a href={"./home"}><img alt="" src={require('../HomeIcon.png')}/></a>
                    <br></br>
					<a id="txt" href={"./home"}>Home</a>
			    </p>
            <aside className="main_sidebar">
                <ul>
                    <li className="side-select" onClick={() => props.change_page('edit')}>Edit information:</li>
                </ul>
            </aside>
        </div> 
        )
    }

    export default SideBar;
