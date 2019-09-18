import React from 'react';

export default class ProductListItem extends React.Component {
  render() {
    let products = this.props.products;
    return (
      <React.Fragment>
        <div className="card m-2 col-3" style={{ width: 18 + 'rem' }} 
          onClick ={ () => this.props.setView('details', products.id) } >
          <img src={ products.image } className="card-img-top"/>
          <div className="card-body">
            <h5 className="card-title">{products.name}</h5>
            <h6 className="card-description">{products.price}</h6>
            <p className="card-text">{products.shortDescription}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
