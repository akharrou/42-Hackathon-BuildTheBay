import React from 'react';
import './adminpage.css';

class Adminpage extends React.Component {
	constructor(){
		super();
		this.state = {
			'Name': "",
			'Category': "",
			'Address': "",
			'Website': "",
			'Cater': "",
			'Hours': "",
			'Service': ""
		}
		this.update_field = this.update_field.bind(this);
	}

	store_field = (e, field) => {
        this.setState({
            [e.target.name]: e.target.value
        });
		console.log(this.state);
	}

	update_field = (field) => {
		let obj = {
			[field]: this.state[field]
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

	render(){
		return (
			<form className="adminBody">
 			 	<label className="label-admin">
				    Restaurant Name:
    				<input onChange={(e) => this.store_field(e)} type="text" name="Name" />
					<button type="button" onClick={() => this.update_field('Name')} className="btn btn-success">Update</button>
  				</label>
 			 	<label className="label-admin">
				    Category:
    				<input onChange={(e) => this.store_field(e)} type="text" name="Category" />
					<button type="button" onClick={() => this.update_field('Category')} className="btn btn-success">Update</button>
  				</label>
 			 	<label className="label-admin">
				    Address:
    				<input onChange={(e) => this.store_field(e)} type="text" name="Address" />
					<button type="button" onClick={() => this.update_field('Address')} className="btn btn-success">Update</button>
  				</label>
 			 	<label className="label-admin">
				    Website:
    				<input onChange={(e) => this.store_field(e)} type="text" name="Website" />
					<button type="button" onClick={() => this.update_field('Website')} className="btn btn-success">Update</button>
  				</label>
 			 	<label className="label-admin">
				    Cater:
    				<input onChange={(e) => this.store_field(e)} type="text" name="Cater" />
					<button type="button" onClick={() => this.update_field('Cater')} className="btn btn-success">Update</button>
  				</label>
 			 	<label className="label-admin">
				    Hours:
    				<input onChange={(e) => this.store_field(e)} type="text" name="Hours" />
					<button type="button" onClick={() => this.update_field('Hours')} className="btn btn-success">Update</button>
  				</label>
 			 	<label className="label-admin">
				    Full or limited Service:
    				<input onChange={(e) => this.store_field(e)} type="text" name="Service" />
					<button type="button" onClick={() => this.update_field('Service')} className="btn btn-success">Update</button>
  				</label>
			</form>
		)
	}
}

export default Adminpage;
