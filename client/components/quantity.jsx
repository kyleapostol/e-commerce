import React from 'react';

export default class Quantity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.item.count,
      product: null,
      id: null,
      action: null,
      delete: "",
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);
    this.handleUnqiqueId = this.handleUnqiqueId.bind(this);
    this.handleAddProduct = this.handleAddProduct.bind(this);
    this.handleDeleteProduct = this.handleDeleteProduct.bind(this);
  }

  increment(item) {
    this.setState({ action: 'inc' });
    this.setState({ id: item.productID });
    this.setState({ value: parseInt(this.state.value) + 1 });
    this.handleUnqiqueId(item);
  }

  handleAddProduct() {
    this.state.product === null ? null : this.props.add(this.state.product);
  }

  decrement(item) {
    this.setState({ action: 'dec' });
    this.setState({ id: item.productID });
    this.setState({ value: this.state.value > 0 ? --this.state.value : 0 });
    this.handleUnqiqueId(item);
  }

  handleDeleteProduct() {
    let productID = this.state.product.id;
    let productCount = this.props.item.count;
    if(productCount == 1){
      this.setState({ delete : "deleteModal"})
    }else{
      this.props.delete(productID, productCount);
    }
  }

  handleQuantity(value) {
    console.log('value: ', value)
    if (value !== 0) {
      return this.state.value;
    } else if( value == 2){
      this.setState({ delete : "deleteModal" })
      // this.props.delete(this.props.item.productID);
    }
  }

  handleUnqiqueId(item) {
    fetch('/api/products.php?id=' + item.productID)
      .then(res => res.json())
      .then(obj => this.setState({ product: obj[0] }))
      .then(() => this.handleAction());
  }

  handleAction() {
    if (this.state.action === 'inc') {
      this.handleAddProduct();
    } else {
      this.handleDeleteProduct();
    }
  }

  render() {
    console.log("delete: ", this.state.delete)
    let item = this.props.item;
    return (
      <div>
        <div className="quantity-input">
          <b>Quantiy: </b>
          <button className="quantity-input__modifier quantity-input__modifier--left" data-toggle="modal" data-target="#deleteModal"
            onClick={ () => {
              this.decrement(item);
              this.props.handleTotal();
            } }>&mdash;
          </button>
          <div className="quantity-input__screen">{ this.handleQuantity(this.state.value) }</div>
          <button className="quantity-input__modifier quantity-input__modifier--right"
            onClick={ () => {
              this.increment(item);
              this.props.handleTotal();
            } }>&#xff0b;</button>
        </div>
      </div>
    );
  }
}
