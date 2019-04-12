import React from 'react';
import "./login.css";

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            login: "",
            pass: "",
            res: ""
        }
    }

    store_field = (e, field) => {
        this.setState({
            [e.target.name]: e.target.value
        });
	}

    update_field = (field) => {
		let obj = {
            "Email": this.state.login,
            "Passwd": this.state.pass
		}
		let url = `http://localhost:8000/api/login`
		fetch(url, {
		    method: 'POST',
			headers: {
   				'Accept': 'application/json',
    			'Content-Type': 'application/json'
  			},
    		body: JSON.stringify(obj)
        })
        .then(res => res.json())
        .then(data => {
            this.setState({
                user: data.response
            });
            setTimeout(() => console.log(this.state), 3000);
            if (this.state.user !== "false")
            {
                localStorage.setItem("user", JSON.stringify(this.state.user));
                window.location = "./admin";
            }
             else
                 alert("Invalid credentials");
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
                                <p id="ULog">User Sign in</p>
                        <form>
                        <div className="login-conten">
                            <div className="form-title">
                                <p className="txt">Email</p>
                                <p className="txt">Password</p>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" onChange={(e) => this.store_field(e)} name="login"/><br></br>
                                <input type="password" className="form-control" onChange={(e) => this.store_field(e)} name="pass"/>
                            </div>
                        </div>
                        </form>
                        <button type="submit" onClick={() => this.update_field()} className="btn btn-secondary">Sign in</button>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default Login;
