import React from 'react';
import Footer from './footer';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInfo: null,
      // orderBtn: 'Place Order',
      validateEmail: null,
      shippingInfo: {
        fName: null,
        lName: null,
        address: null,
        city: null,
        state: null,
        zipCode: null,
        phoneNum: true,
        card: null,
      },
      creditInfo: null,
      validateInfo : {
        email: null,
        fName: null,
        lName: null,
        address: null,
        city: null,
        state: null,
        zipCode: null,
        phone: true,
        card: null,
      }
    };
    // this.handleUserInput = this.handleUserInput.bind(this);
    this.handleEmailInfo = this.handleEmailInfo.bind(this);
    this.handleCardInfo = this.handleCardInfo.bind(this);
    this.handleShippingInfo = this.handleShippingInfo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldCheck = this.handleFieldCheck.bind(this);
    // this.handleValidation = this.handleValidation.bind(this);
  }

  // handleUserInput() {
  //   this.setState({ orderBtn: 'Submitted' });
  // }

  handleShippingInfo(event) {
    const target = event.target.placeholder;
    const shippingInfo = { ...this.state.shippingInfo }; //review what is happening here
    const validateInfo = { ...this.state.validateInfo };
    console.log("spread op: ", shippingInfo);
    switch (target) {
      case 'First Name' :
        shippingInfo.fName = event.target.value;
        const fname = RegExp(/^[a-zA-Z]*$/g);
        // fname.test(shippingInfo.fName) ? this.setState({validateInfo : {fName : "valid"} }) : this.setState({validateInfo : {fName : 'invalid'} });
        fname.test(shippingInfo.fName) ? validateInfo.fName = "valid" : validateInfo.fName = "invalid";
        this.setState({ validateInfo : validateInfo })
        this.setState({ shippingInfo : shippingInfo });
        break;
      case 'Last Name' :
        shippingInfo.lName = event.target.value;
        const lname = RegExp(/^[a-zA-Z]*$/g);
        // lname.test(shippingInfo.lName) ? this.setState({validateInfo : {lName: "valid"} }) : this.setState({validateInfo : {lName: 'invalid'} });
        lname.test(shippingInfo.lName) ? validateInfo.lName = "valid" : validateInfo.lName = "invalid";
        this.setState({ validateInfo : validateInfo })
        this.setState({ shippingInfo : shippingInfo });
        break;
      case 'Address' :
        shippingInfo.address = event.target.value;
        if(shippingInfo.address > 1){
          const address = RegExp(/^[a-zA-Z0-9\s,'-]*$/g);
          address.test(shippingInfo.address) ? this.setState({validateInfo : {address: "valid"} }) : this.setState({address: {lName: 'invalid'} });
          this.setState({ shippingInfo : shippingInfo });
        }else{
          this.setState({address: {lName: 'invalid'}})
        }
        break;
      case 'Apartment,suite,etc.(optional)' :
        shippingInfo.apt = event.target.value;
        this.setState({ apt : shippingInfo });
        break;
      case 'City' :
        shippingInfo.city = event.target.value;
        const city = RegExp(/^[a-zA-Z]*$/g);
        city.test(shippingInfo.city) ? this.setState({validateInfo : {city : "valid"} }) : this.setState({validateInfo : {city : 'invalid'} });
        this.setState({ shippingInfo : shippingInfo });    
        break;
      case 'State' :
        shippingInfo.state = event.target.value;
        const state = RegExp(/(^\w\D{2})/g);
        state.test(shippingInfo.state) ? this.setState({validateInfo : {state : "valid"} }) : this.setState({validateInfo : {state : 'invalid'} });
        this.setState({ shippingInfo: shippingInfo });
        break;
      case 'Zip Code' :
        shippingInfo.zipCode = event.target.value;
        const zipCode = RegExp(/^\d{5}/g);
        zipCode.test(shippingInfo.state) ? this.setState({validateInfo : {zipCode : "valid"} }) : this.setState({validateInfo : {zipCode : 'invalid'} });
        this.setState({ shippingInfo : shippingInfo });
        break;
      case 'Phone(Optional)' :
        shippingInfo.phoneNum = event.target.value;
        const phone = RegExp(/^\d{10}/g);
        phone.test(shippingInfo.phoneNum) ? this.setState({validateInfo : {phone : "valid"} }) : this.setState({validateInfo : {phone : 'invalid'} });
        this.setState({ shippingInfo : shippingInfo });
        break;
    }
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

  handleEmailInfo(event) {
    const emailTest = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if(emailTest.test(event.target.value)){ 
      this.setState({ emailInfo : event.target.value })
      this.setState({ validateInfo : { email : "valid"} }) 
    } else{
      this.setState({ validateInfo : { email : "invalid"} })
    }    
  }

  handleCardInfo(event) {
    const card = RegExp(/^\d{16}/g);
    if(card.test(event.target.value)){
      this.setState({ shippingInfo : {card : event.target.value} });
      this.setState({ validateInfo : {card : "valid"} })
    }else{
      this.setState({ validateInfo : {card : "invalid"} })
    }
  }
  render() {
    console.log("name: ", this.state.validateInfo.fName);
    console.log("obj: ", this.state.validateInfo);
    return (
      <div>
        <div className='container'>
          <div>
            <h1>Checkout</h1>
            <h5>Order Total: ${ this.props.totalAmt }</h5>
          </div>
          <form htmlFor="validationDefault01" onSubmit={ this.handleSubmit }>
            Contact Information:
            <div className="row mb-3">
              <div className="col">
                <input type="text" className={`form-control ${this.state.validateInfo.email}-email`} id="validationDefault01" placeholder="Enter email" 
                  onChange={ this.handleEmailInfo } required/>
              </div>
            </div>
            <div className="row">
              <div className="col mt-1">Shipping Address:
                <label htmlFor="validationDefault02"></label>
                <input type="text" className={`form-control ${this.state.validateInfo.fName}-fname`} id="validationDefault02" placeholder="First Name" 
                  onChange={ this.handleShippingInfo } required/>
              </div>
              <div className="col">
                <label htmlFor="validationDefault03"></label>
                <input type="text" className={`form-control ${this.state.validateInfo.lName}-lname`} id="validationDefault03" placeholder="Last Name" 
                  onChange={ this.handleShippingInfo } required/>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="validationDefault04"></label>
                <input type="text" className={`form-control ${this.state.validateInfo.address}-address`} id="validationDefault04" placeholder="Address" 
                  onChange={ this.handleShippingInfo } required/>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="validationDefault06"></label>
                <input type="text" className={`form-control ${this.state.validateInfo.city}-city`} id="validationDefault06" placeholder="City"   
                  onChange={this.handleShippingInfo} required/>
              </div>
            </div> 
            <div className="row">
              <div className="col-4">
                <label></label> 
                <input type="text" className="form-control" readOnly value="United States"/>
              </div>
              <div className="col-4">
                <label htmlFor="validationDefault07"></label>
                <input type="text" className={`form-control ${this.state.validateInfo.state}-state`} id="validationDefault08" placeholder="State" 
                  onChange={this.handleShippingInfo} required/>
              </div>
              <div className="col-4">
                <label htmlFor="validationDefault09"></label>
                <input type="text" className={`form-control ${this.state.validateInfo.zipCode}-zipcode`} id="validationDefault09" placeholder="Zip Code" 
                  onChange={this.handleShippingInfo} required/>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="validationDefault10"></label>
                <input type="text" className={`form-control ${this.state.validateInfo.phoneNum}`} id="validationDefault10" placeholder="Phone(Optional)" 
                  onChange={this.handleShippingInfo}/>
              </div>
            </div>
            <div className="form-group mt-4">
              <label htmlFor="validationDefault11">Credit/Debit Card Information:</label>
              <input type="text" className={`form-control ${this.state.validateInfo.card}-card`} id="validationDefaut11" placeholder="9999-9999-9999-0000" 
                onChange={this.handleCardInfo}/>
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
