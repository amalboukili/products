import React, { Component } from 'react';
import Filters from './forms/Filters.component';
import ProductTable from './table/ProductTable.component';
import ProductForm from './forms/ProductForm.component';

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
  render() {
    return (
      <div>
        {/* add Filters */}
        <Filters />
        {/* add ProductTable */}
        <ProductTable products={PRODUCTS} />
        {/* add ProductForm */}
        <ProductForm />
      </div>
    );
  }
}

export default Products;
