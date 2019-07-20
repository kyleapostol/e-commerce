import React from 'react';

class ProductListItem extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="card" style={{ width: '18rem' }}/>
        <img className="card-img-top" src={this.props.obj.image} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">{this.props.obj.name}</h5>
          <h6 className="card-title">{this.props.obj.price}</h6>
          <p className="card-text">{this.props.obj.shortDescription}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductListItem;
