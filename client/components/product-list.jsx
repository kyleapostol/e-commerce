import React from 'react';
import ProductListItem from './product-list-item';
import Footer from './footer';

export default class ProductList extends React.Component {
  render() {
    let products = this.props.products;
    return (
      <div>
        <div className="container-fluid main-container">
          <hr></hr>
          <div className="row justify-content-around">
            { products.map(productObj => (
              <ProductListItem
                key = { productObj.id }
                products = { productObj }
                setView = { this.props.setView } />
            ))
            }
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
