import React from 'react';
import ReactDOm from 'react-dom';

class ProductListItem extends React.Component{

    render(){
        const divStyle = {
            width : '18rem', 
        };
        return(
            
            <div className="card" style={divStyle}>
              <img class="card-img-top" src="..." alt="Card image cap"/>
                <div className="card-body">
                <h5 className="card-title">Product Name</h5>
                <h6 className="product-price">$0.00</h6>
                <p className="card-text">short description </p>
                </div>
            </div>
        )
    };
}

export default ProductListItem;