import React from 'react';

class ProductListItem extends React.Component {
  render() {
    let ProductInfo = this.productInfo;
    return (
      <div className="card" style="width: 18rem;">
        <img className="card-img-top" src="..." alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text"></p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    );
  }
}

export default ProductListItem;
