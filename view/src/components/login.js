import React from 'react';
import "./login.css";

class Login extends React.Component {
    render() {
        return (
        <div>
            <div className="sidenav">
                <div className="login-main-text">
                    <h2>application<br /> login page</h2>
                    <p>login or register from here to access.</p>
                </div>
            </div>
            <div className="main">
                <div classNam="col-md-6 col-sm-12">
                    <div className="login-form">
                        <form>
                            <div className="form-group">
                                <label>user name</label>
                                <input type="text" className="form-control" placeholder="user name" />
                            </div>
                            <div className="form-group">
                                <label>password</label>
                                <input type="password" className="form-control" placeholder="password" />
                            </div>
                            <button type="submit" className="btn btn-black">login</button>
                            <button type="submit" className="btn btn-secondary">register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default Login;