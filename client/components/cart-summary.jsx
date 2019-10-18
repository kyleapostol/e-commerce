import React from 'react';
import CartSummaryItem from './cart-summary-item';
import Footer from "./footer"

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
            this.setState({ cartTotal: currentTotal }) })
    }

    render(){
        console.log("props: ", this.props.cartItems);
        return (
            <div className="cart-summary-container">
                <h1 className="product-title">Cart Summary</h1>
                <div className="return-btn" onClick={ () => this.props.setView('catalog', {}) }>
                    <div className="fas fa-arrow-left arrow-margin mb-3">{" Continue Shopping"}</div>
                </div>
                <div>                    
                    {this.props.cartItems.map( cartObj => {
                        console.log("cartsummary: ", cartObj)
                        return (
                            <CartSummaryItem
                                key = { cartObj.id }
                                cartItem = { cartObj }
                            />
                        )
                    })}
                </div>
                <div className="container d-flex justify-content-around">
                Subtotal: ${this.state.cartTotal}
                    <button type="button" 
                        className="btn btn-success checkout-cart-btn"
                        onClick= {() => this.props.setView("checkout", {} )}>Checkout</button>
                </div>
                <Footer/>
            </div> 
        )
    }
}