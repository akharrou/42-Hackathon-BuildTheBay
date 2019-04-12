import React from 'react';
import './adminpage.css';

class Adminpage extends React.Component {
	constructor(){
		super();
		this.state = {
			'Name': "",
			'Category': "",
			'Address': "",
			'Description': "",
			'Website': "",
			'Cater': "",
			'Hours': "",
			'Service': "",
			'Photo': "",
			'Video': ""
		}
		this.update_field = this.update_field.bind(this);
		this.media = this.media.bind(this);
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
		let url = `http://localhost:8000/api/update/${field}`
		fetch(url, {
		    method: 'POST',
			headers: {
   				 'Accept': 'application/json',
    			'Content-Type': 'application/json'
  			},
    		body: JSON.stringify(obj)
		});
	}

	media = (field) => {
		let obj = {
			link: this.state[field],
			type: field
		}
		//This url is not the right one.
		/*let url = `http://localhost:8000/api/update/${field}`
		fetch(url, {
		    method: 'POST',
			headers: {
   				 'Accept': 'application/json',
    			'Content-Type': 'application/json'
  			},
    		body: JSON.stringify(obj)
		});*/
	}

	render(){
		return (
			<form className="adminBody">
 			 	<label className="label-admin">
				    Restaurant Name:
    				<input onChange={(e) => this.store_field(e)} placeholder="Enter Name" type="text" name="Name" />
					<button type="button" onClick={() => this.update_field('Name')} className="btn btn-success">Edit</button>
  				</label>
 			 	<label className="label-admin">
				    Address:
    				<input onChange={(e) => this.store_field(e)} placeholder="Enter Address" type="text" name="Address" />
					<button type="button" onClick={() => this.update_field('Address')} className="btn btn-success">Edit</button>
  				</label>
 			 	<label className="label-admin">
				    Description:
    				<input onChange={(e) => this.store_field(e)} placeholder="Enter Description" type="text" name="Description" />
					<button type="button" onClick={() => this.update_field('Description')} className="btn btn-success">Edit</button>
  				</label>
 			 	<label className="label-admin">
				    Category:
    				<input onChange={(e) => this.store_field(e)} placeholder="Enter Category" type="text" name="Category" />
					<button type="button" onClick={() => this.update_field('Category')} className="btn btn-success">Edit</button>
  				</label>
 			 	<label className="label-admin">
				    Hours:
    				<input onChange={(e) => this.store_field(e)} placeholder="Enter Hours" type="text" name="Hours" />
					<button type="button" onClick={() => this.update_field('Hours')} className="btn btn-success">Edit</button>
  				</label>
				<label className="label-admin">
				    Link Photo:
    				<input onChange={(e) => this.store_field(e)} placeholder="Enter Photo" type="text" name="Photo" />
					<button type="button" onClick={() => this.update_field('Photo')} className="btn btn-success">Edit</button>
  				</label>
				  <label className="label-admin">
				    Link Video:
    				<input onChange={(e) => this.store_field(e)} placeholder="Enter Video" type="text" name="Video" />
					<button type="button" onClick={() => this.update_field('Video')} className="btn btn-success">Edit</button>
  				</label>
 			 	<label className="label-admin">
				    Website:
    				<input onChange={(e) => this.store_field(e)} placeholder="Enter Website" type="text" name="Website" />
					<button type="button" onClick={() => this.update_field('Website')} className="btn btn-success">Edit</button>
  				</label>
 			 	<label className="label-admin">
				    Cater:
    				<input onChange={(e) => this.store_field(e)} placeholder="Cater or Not" type="text" name="Cater" />
					<button type="button" onClick={() => this.update_field('Cater')} className="btn btn-success">Edit</button>
  				</label>
 			 	<label className="label-admin">
					Service:
    				<input onChange={(e) => this.store_field(e)} placeholder="Full or Limited" type="text" name="Service" />
					<button type="button" onClick={() => this.update_field('Service')} className="btn btn-success">Edit</button>
  				</label>
			</form>
		)
	}
}

export default Adminpage;
