import React from 'react';
import Footer from './footer';

export default class CheckoutForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            orderBtn : 'Place Order',
            emailInfo : '',
            shippingInfo : {
                fName : '',
                lName : null,
                address : null,
                apt : null,
                city : null,
                state : null,
                zipCode : null,
                phoneNum : null,
            },
            creditInfo : null
        }
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleEmailInfo = this.handleEmailInfo.bind(this);
        this.handleCardInfo = this.handleCardInfo.bind(this);
        this.handleShippingInfo = this.handleShippingInfo.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUserInput(){
        this.setState({orderBtn : "Submitted"})
    }

    handleEmailInfo(event){
        this.setState({emailInfo: event.target.value});
    }

    handleShippingInfo(event){
        const target = event.target.placeholder;
        const shippingInfo = { ...this.state.shippingInfo }
        switch(target){
            case "First Name" :
                shippingInfo.fName = event.target.value;
                this.setState( {shippingInfo: shippingInfo} );
                break;
            case "Last Name" :
                shippingInfo.lName = event.target.value;
                this.setState( {shippingInfo: shippingInfo} );
                break;            
            case "Address" :
                shippingInfo.address = event.target.value;
                this.setState( {shippingInfo: shippingInfo} );
                break;            
            case "Apartment,suite,etc.(optional)" :
                shippingInfo.apt = event.target.value;
                this.setState( {apt: shippingInfo} );
                break;           
            case "City" :
                shippingInfo.city = event.target.value;
                this.setState( {shippingInfo: shippingInfo} );
                break;            
            case "State" :
                shippingInfo.state = event.target.value;
                this.setState( {shippingInfo: shippingInfo} );
                break;            
            case "Zip Code" :
                shippingInfo.zipCode = event.target.value;
                this.setState( {shippingInfo: shippingInfo} );
                break;           
            case "Phone(Optional)" :
                shippingInfo.phoneNum = event.target.value;
                this.setState( {shippingInfo: shippingInfo} );
                break;
        }
    }

    handleCardInfo(event){
        this.setState( {creditInfo:event.target.value} );
    }

    handleSubmit(event){
        event.preventDefault();
    }

    render(){
        console.log(this.state.shippingInfo);
        return (
            <div>
                <div className='container'>
                <div>
                    <h1>Checkout</h1>
                    <h5>Order Total: $0.00</h5>
                </div>
                <form htmlFor="validationDefault01" onSubmit={this.handleSubmit}>
                    Contact Information:
                    <div className="row">
                        <div className="col row1">
                            <input type="text" className="form-control" id="validationDefault01" placeholder="Enter email" onChange={this.handleEmailInfo} required/>
                        </div>
                    </div>

                    <label>Shipping address:</label>     
                    <div className="form-group row">
                        <div className="col">
                            <label htmlFor="validationDefault02"></label>
                            <input type="text" className="form-control"  id="validationDefault02" placeholder="First Name" onChange={this.handleShippingInfo} required/>
                        </div>
                        <div className="col">
                            <label htmlFor="validationDefault03"></label>
                            <input type="text" className="form-control" id="validationDefault03" placeholder="Last Name" onChange={this.handleShippingInfo} required/>
                        </div>   
                    </div> 
                    <div className="form-group row">
                       <div className="col">
                            <label htmlFor="validationDefault04"></label>
                            <input type="text" className="form-control" id="validationDefault04" placeholder="Address" onChange={this.handleShippingInfo} required/>
                        </div>
                    </div>
                    <div className="form-group row">
                       <div className="col">
                            <label htmlFor="validationDefault05"></label>                       
                            <input type="text" className="form-control" placeholder="Apartment,suite,etc.(optional)" onChange={this.handleShippingInfo}/>
                        </div>
                    </div>
                    <div className="form-group row">
                       <div className="col">
                            <label htmlFor="validationDefault06"></label>    
                            <input type="text" className="form-control" id="validationDefault06" placeholder="City" onChange={this.handleShippingInfo} required/>
                        </div>
                    </div>
                    <div className="form-group row">
                       <div className="col-4">
                        <label></label>
                            <input type="text" className="form-control"  readOnly value="United States"/>
                        </div>
                        <div className="col-4">
                            <label htmlFor="validationDefault07"></label>
                            <input type="text" className="form-control" id="validationDefault08" placeholder="State" onChange={this.handleShippingInfo} required/>
                        </div>                       
                        <div className="col-4">
                            <label htmlFor="validationDefault09"></label>
                            <input type="text" className="form-control" id="validationDefault09" placeholder="Zip Code" onChange={this.handleShippingInfo} required/>
                        </div>
                    </div>
                    <div className="form-group row">
                       <div className="col">
                            <label htmlFor="validationDefault10"></label>
                            <input type="text" className="form-control" id="validationDefault10" placeholder="Phone(Optional)" onChange={this.handleShippingInfo} required/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="validationDefault11">Credit/Debit Card Information:</label>
                        <input type="text" className="form-control" id="validationDefaut11" placeholder="9999-9999-9999-0000" onChange={this.handleCardInfo}/>
                    </div>

                    <div className="d-flex justify-content-between">
                        <h5 onClick={ () => this.props.setView('cart', {}) }>
                                { "<Continue Shopping" }
                        </h5>
                        <input className="btn btn-success order-btn" type="submit" value="Submit"></input>
                    </div>
                </form>

                    {/* <button type="button" 
                        className="btn btn-success order-btn"
                        // disabled={!this.state.name || !} 
                        onClick={ () => { this.handleUserInput(), this.props.placeOrder } }>
                    { this.state.orderBtn }
                    </button> */}
            </div>
                <Footer/>
            </div>
        )
    }
}