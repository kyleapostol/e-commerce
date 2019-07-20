import React from 'react';

class ProductList extends React.Component {
  render() {
    let products = this.props.productInfo;

    return (
      <div className="container">
        <div className="row">
          {products.map(obj => {
            return (
              <div key={obj.id} className="col-sm">
                <ProductList obj={obj}/>
              </div>
            );
          }
          )}
        </div>
      </div>
    );
  }
}
export default ProductList;
