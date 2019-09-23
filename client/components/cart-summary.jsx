import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default class CartSummary extends React.Component{
    constructor(){
        super()
        this.state = {
            cartTotal : 0.00
        }
        this.handleTotalAmt = this.handleTotalAmt.bind(this);
    }
    componentDidMount(){
        this.handleTotalAmt();
    }
 
    handleTotalAmt(){
        let currentTotal = 0;
        this.props.cartItems.map( cartObj => { 
            currentTotal += cartObj.price;
            this.setState({cartTotal: currentTotal })})
    }

    render(){
        return (
            <React.Fragment>
                <h1 className="product-title">Cart Summary</h1>
                <div onClick={ () => this.props.setView('catalog', {}) }>
                    {`< Continue Shopping`}
                </div>
                <div>                    
                    {this.props.cartItems.map( cartObj => {
                        return (
                            <CartSummaryItem
                                key = { cartObj.id }
                                cartItem = { cartObj }
                            />
                        )
                    })}
                </div>
                <div className="d-flex justify-content-around">
                Subtotal: ${this.state.cartTotal}
                    <button type="button" 
                        className="btn btn-success checkout-cart-btn"
                        onClick= {() => this.props.setView("checkout", {} )}>Checkout</button>
                </div>
                <div className="footer">©2005-2019 The Apostol Inc. All Rights Reserved</div> 
            </React.Fragment> 
        )
    }
}