import React from 'react';
import './adminpage.css';

class Adminpage extends React.Component {
	constructor(){
		super();
		this.state = {
			'name': "",
			'category': "",
			'address': "",
			'website': "",
			'cater': "",
			'hours': "",
			'fservice': ""
		}
		this.update_field = this.update_field.bind(this);
	}

	store_field = (e, field) => {
        this.setState({
            [e.target.name]: e.target.value
        });
	}

	update_field = (e) => {
		console.log(this.state);
	}
	render(){
		return (
			<form className="adminBody">
 			 	<label className="label-admin">
				    Restaurant Name:
    				<input onChange={(e) => this.store_field(e)} type="text" name="name" />
					<button type="button" onClick={() => this.update_field('name')} className="btn btn-success">Update</button>
  				</label>
 			 	<label className="label-admin">
				    Category: 
    				<input onChange={(e) => this.store_field(e)} type="text" name="category" />
					<button type="button" onClick={() => this.update_field('category')} className="btn btn-success">Update</button>
  				</label>
 			 	<label className="label-admin">
				    Address:
    				<input onChange={(e) => this.store_field(e)} type="text" name="address" />
					<button type="button" onClick={() => this.update_field('address')} className="btn btn-success">Update</button>
  				</label>
 			 	<label className="label-admin">
				    Website:
    				<input onChange={(e) => this.store_field(e)} type="text" name="website" />
					<button type="button" onClick={() => this.update_field('website')} className="btn btn-success">Update</button>
  				</label>
 			 	<label className="label-admin">
				    Cater:
    				<input onChange={(e) => this.store_field(e)} type="text" name="cater" />
					<button type="button" onClick={() => this.update_field('cater')} className="btn btn-success">Update</button>
  				</label>
 			 	<label className="label-admin">
				    Hours:
    				<input onChange={(e) => this.store_field(e)} type="text" name="hours" />
					<button type="button" onClick={() => this.update_field('hours')} className="btn btn-success">Update</button>
  				</label>
 			 	<label className="label-admin">
				    Full or limited Service:
    				<input onChange={(e) => this.store_field(e)} type="text" name="fservice" />
					<button type="button" onClick={() => this.update_field('fservice')} className="btn btn-success">Update</button>
  				</label>
			</form>
		)
	}
}

export default Adminpage;
