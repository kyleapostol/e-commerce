import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default class CartSummary extends React.Component{
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
                                cartTotal = { cartObj.price }
                            />
                        )
                    })}
                </div>
                <div className="d-flex justify-content-around">
                Subtotal: $0.00
                    <button type="button" 
                        className="btn btn-success checkout-cart-btn"
                        onClick= {() => this.props.setView("checkout", {} )}>Checkout</button>
                </div>
                <div className="footer">©2005-2019 The Apostol Inc. All Rights Reserved</div> 
            </React.Fragment> 
        )
    }
}