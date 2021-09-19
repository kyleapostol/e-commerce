import React from 'react';

export default class ProductListItem extends React.Component {
  render() {
    let products = this.props.products;
    let image = this.props.products.image;
 
    return (
      <React.Fragment>
        <div className="col-sm-4 zoom"
          onClick ={ () => this.props.setView('details', products.id) } >
          <img src={image} className="card-img-top mt-3"/>
          <div className="d-flex justify-content-between mt-3">
            <h5 className="text-left">{products.name}</h5>
            <p className="text-right text-muted">${products.price}</p>
          </div>
          <p className="text-left text-muted">{products.color}</p>
        </div>
      </React.Fragment>
    );
  }
}
