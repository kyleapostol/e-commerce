import React from 'react';

export default class Header extends React.Component {
  render() {
    let count = this.props.cartItemCount.length;
    return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <img src='../images/logo.jpg'/>
          </div>
          <div className='col'>BootStrap</div>
          <div className='col fas fa-shopping-cart d-flex justify-content-end'
            onClick={ () => this.props.setView('cart',{}) }>
            {`${count} Items`}
          </div>
        </div>
      </div>
    )

  }
}
