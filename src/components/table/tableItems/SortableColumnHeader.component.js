import React, { Component } from 'react';
import './SortableColumnHeader.css';

export class SortableColumnHeader extends Component {
  render() {
    let currentSort =
      this.props.currentSort.column === this.props.column
        ? this.props.currentSort.direction
        : false;
    return (
      <th>
        {this.props.column}
        <button
          className={
            currentSort === 'asc' ? 'SortableColumnHeader-current' : ''
          }
          // style={{
          //   currentSort=== 'desc' ? `${SortableColumnHeaderCurrent}` : '',
          // }}
        >
          &#x25B2;
        </button>
        <button
          className={
            currentSort === 'desc' ? 'SortableColumnHeader-current' : ''
          }
          // style={{
          //   currentSort: 'desc' ? `${SortableColumnHeaderCurrent}` : '',
          // }}
        >
          &#x25BC;
        </button>
      </th>
    );
  }
}
// const SortableColumnHeaderCurrent = {
//   backgroundColor: '#0ff',
// };
export default SortableColumnHeader;
