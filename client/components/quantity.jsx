import React from 'react';

export default class Quantity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
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

  componentDidMount(){
    this.setState({value : this.props.item.count})
  }

  increment(item) {
    this.setState({ action: 'inc' });
    this.setState({ id: item.productID });
    this.setState({ value: parseInt(this.state.value) + 1 });
    this.handleUnqiqueId(item);
  }

  decrement(item) {
    this.setState({ action: 'dec' });
    this.setState({ id: item.productID });
    if(this.state.value > 1){
      this.setState({ value: parseInt(this.state.value) > 0 ? --this.state.value : 0 });
    }
    this.handleUnqiqueId(item);
  }

  handleAddProduct() {
    this.state.product === null ? null : this.props.add(this.state.product);
  }

  handleDeleteProduct() {
    let productID = this.state.product.id;
    let productCount = this.state.value;
    console.log("value: ", this.state.value)
  
    this.props.delete(productID, productCount);  
  }

  handleQuantity(value) {
    if (value !== 0) {
      return this.state.value;
    } else{
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
    let item = this.props.item;
    return (
      <div>
        <div className="quantity-input">
          <b>Quantiy: </b>
          <button className="quantity-input__modifier quantity-input__modifier--left" data-toggle="" data-target="#deleteModal"
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
