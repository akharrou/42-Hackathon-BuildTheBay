import React from 'react';
import './sidebar.css';


const Supsidebar = (props) => {
        return (
            <div className="wrapper">
            <p className="homeBtn">
					<a href={"./home"}><img alt="" src={require('../HomeIcon.png')}/></a>
                    <br></br>
					<a id="txt" href={"./home"}>Home</a>
			    </p>
            <aside className="main_sidebar">
                <ul>
                    <li className="side-select-sup" onClick={() => props.change_page('editUser')}>Add/Delete User:</li>
                </ul>
            </aside>
            
        </div> 
        )
    }

    export default Supsidebar;
