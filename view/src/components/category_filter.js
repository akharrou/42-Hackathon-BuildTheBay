 import React from "react";

class CategoryFilter extends React.Component {
	render() {
		return (
			<div className="container">
			  <div className="row searchFilter" >
				<div className="col-sm-12" >
					<div className="input-group" >
						<input id="table_filter" onChange={(e) => this.props.handle_search(e.target.value)} type="text" className="form-control" placeholder="Search by name" aria-label="Text input with segmented button dropdown" />
      			</div>
     		</div>
  		</div>
</div>
		);
	}
}

export default CategoryFilter;
