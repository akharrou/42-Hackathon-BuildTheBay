import React from 'react';
import './adminpage.css';

class Supedituser extends React.Component {
	constructor(){
		super();
		this.state = {
			'Name': "",
			'Category': "",
			'Passwd': "",
			'Email': "",
			'Cater': "",
			'Hours': "",
			'Service': "",
			'Response': ""
		}
		this.update_field = this.update_field.bind(this);
	}

	store_field = (e, field) => {
        this.setState({
            [e.target.name]: e.target.value
        });
	}

	update_field = () => {
		let obj = {
			"Name": this.state.Name,
			"Passwd": this.state.Passwd,
			"Email": this.state.Email
		}
		let url = `http://localhost:8000/admin/add`
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
				Response: data.response
			});
			if (this.state.Response === "User already exists")
				alert("User already exists");
		});
		console.log(JSON.stringify(obj));
	}

	del_field = () => {
		let obj = {
			"Name": this.state.Name,
		}
		let url = `http://localhost:8000/admin/delete`
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
				Response: data.response
			});
			if (this.state.Response === "User does not exist")
				alert("User does not exist");
		});
		console.log(JSON.stringify(obj));
	}

	render(){
		return (
			<div className="supBody">
			<form method="POST">
 			 	<label className="label-adm-input">
				    Name:
    				<input onChange={(e) => this.store_field(e)} type="text" name="Name" />
  				</label>
 			 	<label className="label-adm-input">
				    E-mail:
    				<input onChange={(e) => this.store_field(e)} type="text" name="Email" />
  				</label>
 			 	<label className="label-adm-input">
				    Password:
    				<input onChange={(e) => this.store_field(e)} type="text" name="Passwd" />
  				</label>
				<div className="label-adm-input">
					<button type="button" onClick={() => this.del_field()}
						className="admBtns">Delete User
					</button>

					<button type="button" onClick={() => {this.update_field()}}
						className="admBtns">Create User
					</button>
				</div>
			</form>
			</div>
		)
	}
}

export default Supedituser;

