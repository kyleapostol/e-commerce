import React from 'react';
import Footer from './footer';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderBtn: 'Place Order',
      emailInfo: null,
      shippingInfo: {
        fName: null,
        lName: null,
        address: null,
        city: null,
        state: null,
        zipCode: null,
        phoneNum: true
      },
      creditInfo: null
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleEmailInfo = this.handleEmailInfo.bind(this);
    this.handleCardInfo = this.handleCardInfo.bind(this);
    this.handleShippingInfo = this.handleShippingInfo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldCheck = this.handleFieldCheck.bind(this);
  }

  handleUserInput() {
    this.setState({ orderBtn: 'Submitted' });
  }

  handleEmailInfo(event) {
    const emailTest = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    if(emailTest.test(event.target.value)){
    console.log("true");
    this.setState({ emailInfo: event.target.value });
    }
  }

  handleShippingInfo(event) {
    const target = event.target.placeholder;
    const shippingInfo = { ...this.state.shippingInfo }; //review what is happening here
    switch (target) {
      case 'First Name' :
        shippingInfo.fName = event.target.value;
        console.log(shippingInfo);
        this.setState({ shippingInfo: shippingInfo });
        break;
      case 'Last Name' :
        shippingInfo.lName = event.target.value;
        console.log(shippingInfo);
        this.setState({ shippingInfo: shippingInfo });
        break;
      case 'Address' :
        shippingInfo.address = event.target.value;
        console.log(shippingInfo);
        this.setState({ shippingInfo: shippingInfo });
        break;
      case 'Apartment,suite,etc.(optional)' :
        shippingInfo.apt = event.target.value;
        this.setState({ apt: shippingInfo });
        break;
      case 'City' :
        shippingInfo.city = event.target.value;
        console.log(shippingInfo);
        this.setState({ shippingInfo: shippingInfo });
        break;
      case 'State' :
        shippingInfo.state = event.target.value;
        console.log(shippingInfo);
        this.setState({ shippingInfo: shippingInfo });
        break;
      case 'Zip Code' :
        shippingInfo.zipCode = event.target.value;
        console.log(shippingInfo);
        this.setState({ shippingInfo: shippingInfo });
        break;
      case 'Phone(Optional)' :
        shippingInfo.phoneNum = event.target.value;
        console.log(shippingInfo);
        this.setState({ shippingInfo: shippingInfo });
        break;
    }
  }

  handleCardInfo(event) {
    this.setState({ creditInfo: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleFieldCheck() {
    const arr = Object.values(this.state.shippingInfo);
    let test = arr.includes(null);
    if (!test && this.state.creditInfo && this.state.emailInfo) {
      return `#exampleModal`;
    }
  }

  render() {
    return (
      <div>
        <div className='container'>
          <div>
            <h1>Checkout</h1>
            <h5>Order Total: ${ this.props.totalAmt }</h5>
          </div>

          <form htmlFor="validationDefault01" onSubmit={this.handleSubmit}>
                    Contact Information:
            <div className="row mb-3">
              <div className="col">
                <input type="text" className="form-control" id="validationDefault01" placeholder="Enter email" onChange={ this.handleEmailInfo } required/>
              </div>
            </div>

            <div className="row">
              <div className="col mt-1">Shipping Address:
                <label htmlFor="validationDefault02"></label>
                <input type="text" className="form-control" id="validationDefault02" placeholder="First Name" onChange={ this.handleShippingInfo } required/>
              </div>
              <div className="col">
                <label htmlFor="validationDefault03"></label>
                <input type="text" className="form-control" id="validationDefault03" placeholder="Last Name" onChange={ this.handleShippingInfo } required/>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="validationDefault04"></label>
                <input type="text" className="form-control" id="validationDefault04" placeholder="Address" onChange={ this.handleShippingInfo } required/>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="validationDefault06"></label>
                <input type="text" className="form-control" id="validationDefault06" placeholder="City" onChange={this.handleShippingInfo} required/>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <label></label>
                <input type="text" className="form-control" readOnly value="United States"/>
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
            <div className="row">
              <div className="col">
                <label htmlFor="validationDefault10"></label>
                <input type="text" className="form-control" id="validationDefault10" placeholder="Phone(Optional)" onChange={this.handleShippingInfo}/>
              </div>
            </div>
            <div className="form-group mt-4">
              <label htmlFor="validationDefault11">Credit/Debit Card Information:</label>
              <input type="text" className="form-control" id="validationDefaut11" placeholder="9999-9999-9999-0000" onChange={this.handleCardInfo}/>
            </div>
            <div className="d-flex justify-content-between checkout-footer-padding">
              <button type="button" className="btn btn-secondary" onClick={ () => this.props.setView('cart', {}) }>Cart Summary</button>
              <input className="btn btn-success order-btn" type="submit" data-toggle="modal" data-target={this.handleFieldCheck()} value="Submit"></input>

              {/* <!-- Modal --> */}
              <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Your Order has been Submitted</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                                Thank You For Shopping and Checking out my Website!
                    </div>
                    <div className="modal-footer">
                      <button type="button" 
                        className="btn btn-secondary" 
                        data-dismiss="modal" 
                        onClick={() => { 
                          this.props.setView('landing-page', {}),
                          this.props.reset()}
                           }>Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <Footer/>
      </div>
    );
  }
}
