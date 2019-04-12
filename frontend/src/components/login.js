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
        console.log(this.state.login);
    }

    pass_listen = (e) => {
        this.setState({
            pass: e.target.value
        });
        console.log(this.state.pass);
    }

    store_field = (e, field) => {
        this.setState({
            [e.target.name]: e.target.value
        });
		console.log(this.state);
	}

    update_field = (field) => {
		let obj = {
            "Login": this.state.login,
            "Passwd": this.state.pass
		}
		let url = `http://localhost:8000/admin/update/${field}`
		fetch(url, {
		    method: 'POST',
			headers: {
   				 'Accept': 'application/json',
    			'Content-Type': 'application/json'
  			},
    		body: JSON.stringify(obj)
		});
	}

    render() {
        return (
        <div className="logbody">
              <p className="homeBtn">
					<a href={"./home"}><img alt="" src={require('../HomeIcon.png')}/></a>
                    <br></br>
					<a id="txt" href={"./home"}>Home</a>
			    </p>
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
                                <input type="text" className="form-control" onChange={(e) => this.store_field(e)} name="login"/><br></br>
                                <input type="password" className="form-control" onChange={(e) => this.store_field(e)} name="pass"/>
                            </div>
                        </div>
                            <button type="submit" onClick={() => this.update_field()} className="btn btn-secondary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default Login;
