import React from 'react';

export default class Carousel extends React.Component {
  render() {
    let productsArr = this.props.products.split(',');

    return (
      <React.Fragment>
        <div id="carousel-products" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner ">
            <div className="carousel-item active overflow-hidden">
              <img src={ productsArr[0] } className="d-block w-100"/>
            </div>
            <div className="carousel-item">
              <img src={ productsArr[1] } className="d-block w-100"/>
            </div>
            <div className="carousel-item">
              <img src={ productsArr[2] } className="d-block w-100"/>
            </div>
          </div>

          <a className="carousel-control-prev" href="#carousel-products" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon carousel-color" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>

          <a className="carousel-control-next" href="#carousel-products" role="button" data-slide="next">
            <span className="carousel-control-next-icon carousel-color" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </React.Fragment>
    );
  }
}
