import React from 'react';

export default class ProductListItem extends React.Component {
  render() {
    let products = this.props.products;
    return (
      <React.Fragment>
        <div className="col-sm-4 zoom"
          onClick ={ () => this.props.setView('details', products.id) } >
          <img src={ products.image } className="card-img-top mt-1"/>
          <div className="d-flex justify-content-between">
            <h5 className="text-left">{products.name}</h5> 
            <p className="text-right text-muted">${products.price}</p>
          </div>
            <p className="text-left text-muted">{products.color}</p>
        </div>
      </React.Fragment>
    );
  }
}
