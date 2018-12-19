import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {

	renderCell = (item, column) => {
		// calls the content(), inside MovieTable.column with the item, and it will return a react element 
		if (column.content) return column.content(item);
		return _.get(item, column.path);
	}

	createKey = (item, column) => {
		return item._id + (column.path || column.key);
	}

	render() {
		const { data, columns } = this.props;

		// use lodash to extract
		return (
		<tbody>
			{data.map(item => (
			<tr key={item._id}>
				{columns.map(column => (
				<td key={this.createKey(item, column)}>{this.renderCell(item, column)}</td>
				))}
			</tr>
			))}
		</tbody>
		);
	}
}

export default TableBody;
