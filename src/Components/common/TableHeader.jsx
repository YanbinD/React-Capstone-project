import React, { Component } from 'react';

// interface 
// column : array 
// sortColumn : object 
// onSort: function 

class TableHeader extends Component {
    
    

    raiseSort = path => {
        const sortColumn = {...this.props.sortColumn};
        if (sortColumn.path === path) {
          sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc'; 
        } else {
          sortColumn.path = path;
          sortColumn.order = 'asc';
        }
        //raise the event here 
        this.props.onSort(sortColumn);
    }


    render() { 

        let sortArrowClassName = "fa fa-sort-".concat(this.props.sortOrder);
        return (
            <thead>
                <tr>
                    {this.props.columns.filter(c => c.label).map( column => (
                        <th 
                            key = {column.key || column.path}
                            onClick={() => this.raiseSort("title")}> {column.label}
                        <i className= {sortArrowClassName} aria-hidden="true"></i> 
                        </th>
                    ))}
                </tr>
            </thead>

          );
    }
}
 
export default TableHeader;