import React, { Component } from 'react';
import SortableColumnHeader from './SortableColumnHeader.component';
import ProductRow from './ProductRow.component';

export class ProductTable extends Component {
  render() {
    let productsAsArray = Object.keys(this.props.products).map(
      (pid) => this.props.products[pid],
    );
    let row = productsAsArray.map((product) => {
      return <ProductRow product={product} key={product.id} />;
    });
    return (
      <table>
        <thead>
          <tr>
            {/* add Product Table Header */}
            <SortableColumnHeader column="name" />
            <SortableColumnHeader column="price" />
          </tr>
        </thead>
        <tboddy></tboddy>
        {/* add Product Row */}
        {row}
      </table>
    );
  }
}

export default ProductTable;
