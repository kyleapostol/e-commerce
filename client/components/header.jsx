import React from 'react';

export default class Header extends React.Component {
  render() {
    let count = this.props.cartItemCount.length;
    return (
      <div className='container header-container'>
        <div className='row'>
          <div className='col d-flex justify-content-start'>
            <img className="header-logo"/>
          </div>
          <div className='col text-center header-text'>BootStrap</div>
          <div className='col fas fa-shopping-cart d-flex justify-content-end shopping-cart-logo'
            onClick={ () => this.props.setView('cart',{}) }>
            {`${count} Items`}
          </div>
        </div>
      </div>
    )

  }
}
