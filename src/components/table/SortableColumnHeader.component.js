import React, { Component } from 'react';

export class SortableColumnHeader extends Component {
  render() {
    return (
      <th>
        {this.props.column}
        <button style={SortableColumnHeaderCurrent}>&#x25B2;</button>
        <button>&#x25BC;</button>
      </th>
    );
  }
}
const SortableColumnHeaderCurrent = {
  backgroundColor: '#0ff',
};
export default SortableColumnHeader;
