import React, { Component } from 'react';
import ProductRow from './tableItems/ProductRow.component';
import SortableColumnHeader from './tableItems/SortableColumnHeader.component';

export class ProductTable extends Component {
  constructor(props) {
    super(props);
    this.sortByColumnAndDirection = this.sortByColumnAndDirection.bind(this);
    this.state = {
      sort: {
        column: 'name',
        direction: 'desc',
      },
    };
  }
  sortByColumnAndDirection(objetA, objetB) {
    let isDesc = this.state.sort.direction === 'desc' ? 1 : -1;
    let [a, b] = [
      objetA[this.state.sort.column],
      objetB[this.state.sort.column],
    ];
    if (this.state.sort.column === 'price') {
      [a, b] = [a, b].map((value) =>
        // eslint-disable-next-line no-useless-escape
        parseFloat(value.replace(/[^\d\.]/g, ''), 10),
      );
    }
    if (a > b) {
      return 1 * isDesc;
    }
    if (a < b) {
      return -1 * isDesc;
    }
    return 0;
  }
  sortProducts() {
    let productsAsArray = Object.keys(this.props.products).map(
      (pid) => this.props.products[pid],
    );
    return productsAsArray.sort(this.sortByColumnAndDirection);
  }
  render() {
    var row = [];
    this.sortProducts().forEach((product) => {
      if (
        product.name.indexOf(this.props.filterText) === -1 ||
        (!product.stocked && this.props.inStockOnly)
      ) {
        return;
      }
      row.push(<ProductRow product={product} key={product.id} />);
    });

    return (
      <table>
        <tr>
          {/* add Product Table Header */}
          <SortableColumnHeader column="name" currentSort={this.state.sort} />
          <SortableColumnHeader column="price" currentSort={this.state.sort} />
        </tr>

        {/* add Product Row */}
        {row}
      </table>
    );
  }
}

export default ProductTable;
