import React from 'react';

export default class CartSummaryItem extends React.Component {
  render() {
    let item = this.props.cartItem;
    return (
      <div className="cart-margin">
        <div className="container cart-container">
          <div className="row">
            <div className="col">
              <img src={ item.image } className="card-img-top card-img-top-2"/>
            </div>
            <div className="col">
              <ul className="mt-3">
                <li><b>Name:</b> { item.name }</li>
                <li><b>Color:</b> { item.color }</li>
                <li><b>Price:</b> { item.price }</li>
                <li><b>Qyt:</b> {item.count}</li>
                <button type="button" className="btn btn-danger btn-sm mt-5 delete-margin">Delete</button>
              </ul>
            </div>
          </div>
        </div>
      </div>

    );

  }
}
