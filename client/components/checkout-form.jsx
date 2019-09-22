import React from 'react';

export default class CheckoutForm extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <div>
                    <h1>Checkout</h1>
                    <h5>Order Total: $0.00</h5>
                </div>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Credit Card</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group form-check">
                        <label>Shipping</label>
                        <input type="text" className="form-control"/>
                    </div>
                </form>                   
                <div className="d-flex justify-content-around"
                    onClick="this.props.">
                    {"<Continue Shopping"}
                    <button type="button" className="btn btn-success">Place Oder</button>
                </div>
                  <div className="footer footer-position">©2005-2019 The Apostol Inc. All Rights Reserved</div> 
            </div>
        )
    }
}