import React, { Component } from 'react';
import './ProductRow.css';
export class ProductRow extends Component {
  render() {
    return (
      <tr
        style={{
          color: this.props.product.stocked ? 'blue' : 'red',
        }}
      >
        <td>
          <span
            className={
              this.props.product.stocked ? '' : 'ProductRow-Out-Of-Stock'
            }
          >
            {this.props.product.name}
          </span>
        </td>
        <td>{this.props.product.price}</td>
        <td>
          <button>x</button>
        </td>
      </tr>
    );
  }
}

export default ProductRow;
