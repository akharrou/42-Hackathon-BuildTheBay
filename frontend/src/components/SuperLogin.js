import React from 'react';
import "./login.css";

class Sulogin extends React.Component {
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
		console.log(this.state);
	}

    update_field = (field) => {
		let obj = {
            "Login": this.state.login,
            "Passwd": this.state.pass
        }
		let url = `http://localhost:8000/admin/login`
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
            console.log(data.response);
            this.setState({
                res: data.response
            });
            if (this.state.res === "true")
                window.location = "./suadmin";
            else
                alert("Incorrect Username and Password");
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
                                <input type="text" name="login" className="form-control" onChange={(e) => this.store_field(e)} /><br></br>
                                <input type="password" name="pass" className="form-control" onChange={(e) => this.store_field(e)} />
                            </div>
                        </div>
                            <span onClick={() => this.update_field()} className="btn btn-secondary">Login</span>
                        </form>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default Sulogin;
