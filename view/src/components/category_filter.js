 import React from "react";

class CategoryFilter extends React.Component {
	render() {
		return (
			<div className="container">
			  <div className="row searchFilter" >
				<div className="col-sm-12" >
					<div className="input-group" >
						<input id="table_filter" type="text" className="form-control" aria-label="Text input with segmented button dropdown" />
					<div className="input-group-btn" >
					<div className="dropdown-menu dropdown-menu-right" >
           <ul className="category_filters" >
            <li >
             <input className="cat_type category-input" data-label="All" id="all" value="" name="radios" type="radio" /><label for="all" >All</label>
            </li>
            <li >
             <input type="radio" name="radios" id="Design" value="Design" /><label className="category-label" for="Design" >Design</label>
            </li>
            <li >
             <input type="radio" name="radios" id="Marketing" value="Marketing" /><label className="category-label" for="Marketing" >Marketing</label>
            </li>
            <li >
             <input type="radio" name="radios" id="Programming" value="Programming" /><label className="category-label" for="Programming" >Programming</label>
            </li>
            <li >
             <input type="radio" name="radios" id="Sales" value="Sales" /><label className="category-label" for="Sales" >Sales</label>
            </li>
            <li >
             <input type="radio" name="radios" id="Support" value="Support" /><label className="category-label" for="Support" >Support</label>
            </li>
           </ul>
        </div>
        <button id="searchBtn" type="button" className="btn btn-secondary btn-search" ><span className="glyphicon glyphicon-search" >&nbsp;</span> <span className="label-icon" >Search</span></button>
       </div>
      </div>
     </div>
  </div>
</div>
		);
	}
}

 export default CategoryFilter;

/*<button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" ><span className="label-icon" >Category</span> <span className="caret" >&nbsp;</span></button>*/