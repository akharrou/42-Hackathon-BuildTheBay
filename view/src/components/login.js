import React from 'react';
import "./login.css";

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            login: "",
            pass: ""
        }
    }

    login_listen = (e) => {
        this.setState({
            login: e.target.value
        });
    }

    pass_listen = (e) => {
        this.setState({
            pass: e.target.value
        });
    }

    render() {
        return (
        <div className="logbody">
            <img className="bg" src={require('../loginbg.png')} alt=""/>
            <div className="sidenav">
                <div className="login-main-text">
                    <h1>Welcome to<br /> Newark</h1>
                    <p>You are a login away from a delicious meal</p>
                </div>
            </div>
            <div className="main">
                <div className="col-md-6 col-sm-12">
                    <div className="login-form">
                                <p id="ULog">User Login</p>
                        <form>
                        <div className="login-conten">
                            <div className="form-title">
                                <p className="txt">Username</p>
                                <p className="txt">Password</p>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" onChange={this.login_listen} /><br></br>
                                <input type="password" className="form-control" onChange={this.pass_listen}/>
                            </div>
                        </div>
                            <button type="submit" className="btn btn-black">Register</button>
                            <button type="submit" className="btn btn-secondary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default Login;
