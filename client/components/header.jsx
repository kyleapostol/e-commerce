import React from 'react';

export default class Header extends React.Component {

  render() {
    let num = 0;
    let count = this.props.cartItemCount;

    if (count < 1) {
      return (
        <div className='header-container'>
          <div className='row d-flex justify-content-between'>
            <div className='col d-flex justify-content-start'>
              <img className="header-logo" onClick={ () => this.props.setView('catalog', {}) }/>
            </div>
            <div className='col text-center header-text'>BootStrap</div>
            <div className='col fas fa-shopping-cart h3 d-flex justify-content-end shopping-cart-logo'
              onClick={ () => this.props.setView('cart', {}) }>
              {`${num} Items`}
            </div>
          </div>
        </div>
      );
    } else {
      let result = count.map(item => parseInt(item.count));
      if (result.length === 0) {
        num = 0;
      } else {
        num = result.reduce((total, currentVal) => total + currentVal);
      }
      return (
        <div className='header-container'>
          <div className='row d-flex justify-content-between'>
            <div className='col d-flex justify-content-start'>
              <img className="header-logo" onClick={ () => this.props.setView('catalog', {}) }/>
            </div>
            <div className='col text-center header-text'>BootStrap</div>
            <div className='col fas fa-shopping-cart  h3 d-flex justify-content-end shopping-cart-logo'
              onClick={ () => this.props.setView('cart', {}) }>
              {`${num} Items`}
            </div>
          </div>
        </div>
      );
    }
  }

}
