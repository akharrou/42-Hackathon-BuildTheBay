import React from 'react';
import './adminpage.css';

class Supedituser extends React.Component {
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
			<form>
                <label className="label-admin">
				    Add/Modify USER:
    				<input onChange={(e) => this.store_field(e)} type="text" name="name" />
  				</label>
 			 	<label className="label-admin">
				    Name:
    				<input onChange={(e) => this.store_field(e)} type="text" name="name" />
					<button type="button" onClick={() => this.update_field('name')} className="btn btn-success">Update</button>
  				</label>
 			 	<label className="label-admin">
				    Login: 
    				<input onChange={(e) => this.store_field(e)} type="text" name="category" />
					<button type="button" onClick={() => this.update_field('category')} className="btn btn-success">Update</button>
  				</label>
 			 	<label className="label-admin">
				    Password:
    				<input onChange={(e) => this.store_field(e)} type="text" name="address" />
					<button type="button" onClick={() => this.update_field('address')} className="btn btn-success">Update</button>
  				</label>
 			 	<label className="label-admin">
				    E-mail:
    				<input onChange={(e) => this.store_field(e)} type="text" name="website" />
					<button type="button" onClick={() => this.update_field('website')} className="btn btn-success">Update</button>
  				</label>
			</form>
		)
	}
}

export default Supedituser;