import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {
  render() {
    let products = this.props.products;
    console.log('ProductList props: ', products);
    return (
      <div className="container-fluid">
        <div className="row">
          { products.map(productObj => {
            return (<ProductListItem
              key = { productObj.id }
              products = { productObj }/>);
          })}
        </div>
      </div>
    );
  }
}
