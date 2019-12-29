import React, { Component } from 'react';

export class Filters extends Component {
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search.."
          value={this.props.filterText}
        />
        <p>
          <label>
            <input type="checkbox" checked={this.props.inStockOnly} />
            Only show stocked products
          </label>
        </p>
      </form>
    );
  }
}

export default Filters;
