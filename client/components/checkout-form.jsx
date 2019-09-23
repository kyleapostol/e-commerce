import React from 'react';
import Footer from './footer';

export default class CheckoutForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            orderBtn : 'Place Order'
        }

        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(){
        this.setState({orderBtn : "Submitted"})
    }

    render(){
        return (
            <div>
            <div className='container'>
                <div>
                    <h1>Checkout</h1>
                    <h5>Order Total: $0.00</h5>
                </div>
                <form>
                    Contact Information:
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Enter email"/>
                        </div>
                    </div>

                    <label>Shipping address:</label>
                    <div className="form-group row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="First Name"/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Last Name"/>
                        </div>   
                    </div> 
                    <div className="form-group row">
                       <div className="col">
                            <input type="text" className="form-control" placeholder="Address"/>
                        </div>
                    </div>
                    <div className="form-group row">
                       <div className="col">
                            <input type="text" className="form-control" placeholder="Apartment,suite,etc.(optional)"/>
                        </div>
                    </div>
                    <div className="form-group row">
                       <div className="col">
                            <input type="text" className="form-control" placeholder="City"/>
                        </div>
                    </div>
                    <div className="form-group row">
                       <div className="col-4">
                            <input type="text" className="form-control" value="United States"/>
                        </div>
                        <div className="col-4">
                            <input type="text" className="form-control" placeholder="State"/>
                        </div>                       
                        <div className="col-4">
                            <input type="text" className="form-control" placeholder="Zip Code"/>
                        </div>
                    </div>
                    <div className="form-group row">
                       <div className="col">
                            <input type="text" className="form-control" placeholder="Phone(Optional)"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Credit/Debit Card Information:</label>
                        <input type="text" className="form-control" placeholder="9999-9999-9999-0000"/>
                    </div>
                </form>
                <div className="d-flex justify-content-between">
                    <h5 onClick={ () => this.props.setView('cart', {}) }>
                        { "<Continue Shopping" }
                    </h5>
                    <button type="button" className="btn btn-success order-btn" 
                        onClick={ () => this.handleUserInput(), this.props.placeOrder }>
                    { this.state.orderBtn }
                    </button>
                </div>
            </div>
                <Footer/>
            </div>
        )
    }
}