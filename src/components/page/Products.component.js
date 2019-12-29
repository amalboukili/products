import React, { Component } from 'react';
import Filters from '../forms/Filters.component';
import ProductForm from '../forms/ProductForm.component';
import ProductTable from '../table/ProductTable.component';

var PRODUCTS = {
  '1': {
    id: 1,
    category: 'Musical Instruments',
    price: '$459.99',
    stocked: true,
    name: 'Clarint',
  },
  '2': {
    id: 2,
    category: 'Musical Instruments',
    price: '$5.000',
    stocked: true,
    name: 'Harpsicord',
  },
  '3': {
    id: 3,
    category: 'Musical Instruments',
    price: '$11.000',
    stocked: false,
    name: 'Fortepiano',
  },
  '4': {
    id: 4,
    category: 'Furnirure',
    price: '$799',
    stocked: true,
    name: 'Chaise Lounge',
  },
  '5': {
    id: 5,
    category: 'Furnirure',
    price: '$1.300',
    stocked: false,
    name: 'Dining Table',
  },
  '6': {
    id: 6,
    category: 'Furnirure',
    price: '$100',
    stocked: true,
    name: 'Bean Bag',
  },
};
export class Products extends Component {
  constructor(props) {
    super(props);
    this.handleFilter = this.handleFilter.bind(this);
    this.state = {
      filterText: '',
      inStockOnly: false,
      products: PRODUCTS,
    };
  }

  handleFilter(filterInput) {
    this.setState(filterInput);
  }
  render() {
    return (
      <div>
        {/* add Filters */}
        <Filters
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilter={this.handleFilter}
        />
        {/* add ProductTable */}
        <ProductTable
          products={this.state.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
        {/* add ProductForm */}
        <ProductForm />
      </div>
    );
  }
}

export default Products;
