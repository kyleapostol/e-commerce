import React from 'react';
import Quantity from './quantity';

export default class CartSummaryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleDelete(productID, quantity) {
    this.props.delete(productID, quantity);
  }

  handleAdd(productID) {
    this.props.add(productID);
  }

  render() {
    let item = this.props.cartItem;
    return (
      <div className="cart-margin">
        <div className="container cart-container">
          <div className="row">
            <div className="col">
              <img src={ item.image } className="card-img-top card-img-top-2 card-img-top__ipad"/>
            </div>
            <div className="col">
              <ul className="mt-3 ipad-description-content">
                <li><b>Name:</b> { item.name }</li>
                <li><b>Color:</b> { item.color }</li>
                <li><b>Price:</b> { item.price }</li>
                <li>
                  <Quantity
                    item = { item }
                    delete = { this.handleDelete }
                    add = { this.handleAdd }
                    total = { this.props.total }>
                  </Quantity>
                  <button type="button" data-toggle="modal" data-target="#deleteModal" className="btn btn-danger">Delete</button>
                </li>
              </ul>
            </div>
            <div className="modal fade" id="deleteModal" tabIndex="-1" role="dialog" aria-labelledby="deleteModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content delete-modal">
                  <div className="modal-header">
                    <h5 className="modal-title" id="deleteModalLabel">Are you sure?</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    This item will be removed from the cart.
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={ () => this.props.delete(item.productID, 0)}>Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );

  }
}
