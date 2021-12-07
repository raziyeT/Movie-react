import { faColumns } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import _ from "lodash";

class TableBody extends React.Component {

  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
};

render() {
    const { data, columns } = this.props;
    return (
<>
        {console.log("column.Stock")}
      
      <tbody>
        {data.map((item) => (
          <tr>
            {columns.map((column) => {
                return (
                    <td>{this.renderCell(item, column)}</td>
                    
                    );
                }
            )}

          </tr>
        ))}
        
      </tbody>
      </>
    );
  }
}

export default TableBody;
