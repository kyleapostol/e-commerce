import React from 'react';

export default class Header extends React.Component {
  render() {
    let count = this.props.cartItemCount.length;
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-3'>
            <img src='/images/logo.jpg'/>
          </div>
          <div className='col-3'>BootStrap</div>
          <div className='col-3 fas fa-shopping-cart'
          onClick={ () => this.props.setView('cart',{}) }>
            {`${count} Items`}
          </div>
        </div>
      </div>
    )

  }
}

    // return (
    //   <div className="container-fluid">
    //     <p className="text-center header-title">BootStrap
    //       <i className="fas fa-shopping-cart"
    //         onClick={ () => this.props.setView('cart', {})  }>
    //         {`${count} Items`}
    //       </i>         
    //     </p>
    //   </div>
    // );