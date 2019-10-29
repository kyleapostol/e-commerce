import React from 'react';

export default class Quantity extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        value: this.props.item.count,
        product : null,
        id : null,
        action: null
      };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);
    this.handleUnqiqueId = this.handleUnqiqueId.bind(this);
    this.handleAddProduct = this.handleAddProduct.bind(this);
    this.handleDeleteProduct = this.handleDeleteProduct.bind(this);
  }

   componentDidUpdate(prevState){
     if(this.state.product !== this.state.product){
        console.log("this ran: ", prevState);
     }
  //   // console.log("Updated product: ", this.state.product);
  //   if( this.state.action === "inc"){
  //     this.handleAddProduct();
  //   } else if (this.state.action === "dec" )
  //     this.handleDeleteProduct();
  }

  increment(item) {
    this.setState({ action: "inc" })
    this.setState({ id: item.productID });
    this.setState({ value: parseInt(this.state.value) + 1 });
    this.handleUnqiqueId(item);
    // this.handleAddProduct();
  }

  handleAddProduct(){
    if(this.state.product === null) {
      return null;
    }else{
      console.log('ADDED PRODUCT SUCCESSFULLY')
      this.props.add(this.state.product);
    }
  }

  decrement(item) {
    this.setState({ action: "dec" })
    this.setState({ id: item.productID });
    this.setState({ value: this.state.value > 0 ? --this.state.value : 0 });
    this.handleUnqiqueId(item);
    // this.handleDeleteProduct();
  }

  handleDeleteProduct(){
    console.log("HANDLEDELETE SUCCESS:: ", this.state.product);
    let productID = this.state.product.id;
    this.props.delete(productID);
  }


  handleQuantity(value) {
    if (value !== 0) {
      return this.state.value;
    } else {
      console.log('a product is deleted');
      this.props.delete(this.props.item.productID);
    }
  }

  handleUnqiqueId(item){
    fetch("/api/products.php?id=" + item.productID)
    .then( res => res.json())
    .then( obj => this.setState({ product : obj[0] }))
    .then( () => this.handleAction())
  }
  
  handleAction(){
    if(this.state.action === 'inc'){
      this.handleAddProduct()
    }else{
      this.handleDeleteProduct()
    }
  }

  render() {
    let item = this.props.item;
    return (
      <div>
        <div className="quantity-input">
          <b>Quantiy: </b>
          <button className="quantity-input__modifier quantity-input__modifier--left" 
            onClick={ () => {this.decrement(item)} }>&mdash;
            {/* this.props.delete(item) */}
          </button>
          <div className="quantity-input__screen">{ this.handleQuantity(this.state.value) }</div>
          <button className="quantity-input__modifier quantity-input__modifier--right" 
            onClick={ () => {this.increment(item)} }>&#xff0b;</button>
            {/* this.props.add(item) */}
        </div>
      </div>
    );
  }

}
