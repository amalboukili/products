import React, { Component } from 'react';

export class Filters extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const value = e.target[e.target.type === 'checkbox' ? 'checked' : 'value'];
    const name = e.target.name;
    this.props.onFilter({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <input
          name="filterText"
          type="text"
          placeholder="Search.."
          value={this.props.filterText}
          onChange={this.handleChange}
        />
        <p>
          <label>
            <input
              name="inStockOnly"
              type="checkbox"
              checked={this.props.inStockOnly}
              onChange={this.handleChange}
            />
            Only show stocked products
          </label>
        </p>
      </form>
    );
  }
}

export default Filters;
