import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {
  render() {
    let products = this.props.products;
    return (
      <div>
        <div className="container-fluid">
          <div className="row justify-content-around">
            { products.map( productObj => {
                return (
                  <ProductListItem
                    key = { productObj.id }
                    products = { productObj }
                    setView = { this.props.setView }  
                  />
                )}
              )
            }
          </div>
      </div>
        <div className="footer">©2005-2019 The Apostol Inc. All Rights Reserved</div> 
    </div>
    );
  }
}
