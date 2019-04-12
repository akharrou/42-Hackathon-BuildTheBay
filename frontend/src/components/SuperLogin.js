import React from 'react';
import "./login.css";

class Sulogin extends React.Component {
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
              <p className="homeBtn">
					<a href={"./"}><img alt="" src={require('../HomeIcon.png')}/></a>
                    <br></br>
					<a id="txt" href={"./"}>Home</a>
			    </p>
            <img className="bg" src={require('../loginbg.png')} alt=""/>
            <div className="sidenav">
                <div className="login-main-text">
                    <h1>Welcome <br /> Back</h1>
                </div>
            </div>
            <div className="main">
                <div className="col-md-6 col-sm-12">
                    <div className="login-form">
                                <p id="ULog">Admin Login</p>
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
                            <span onClick={this.props.login} className="btn btn-secondary">Login</span>
                        </form>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default Sulogin;