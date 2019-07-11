import React from 'react';
import ReactDOM from 'react-dom';
import ProductListItem from './ProductListItem';

class ProductList extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">{ProductListItem}</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="w-100"></div>
        </div>
        <div className="row">
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="w-100"></div>
        </div>
        <div className="row">
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="w-100"></div>
        </div>
      </div>
    );
  }
}

export default ProductList;
