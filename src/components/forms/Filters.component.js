import React, { Component } from 'react';

export class Filters extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search.." />
        <p>
          <label>
            <input type="checkbox" />
            &nbsp;Only show stocked products
          </label>
        </p>
      </form>
    );
  }
}

export default Filters;
