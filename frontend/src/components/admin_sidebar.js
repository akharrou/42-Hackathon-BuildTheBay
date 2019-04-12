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
                    <li className="side-select" >Edit information:</li>
					<li>
            			<button type="submit" onClick={props.logout} className="btn btn-secondary">Logout</button>
					</li>
                </ul>
            </aside>
        </div> 
        )
    }

export default SideBar;
