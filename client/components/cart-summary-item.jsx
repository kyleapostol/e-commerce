import React from 'react';

export default class CartSummaryItem extends React.Component{
    render(){
        console.log("cart items::::: ", this.props.cartItem);
        let cartItem = this.props.cartItem;
        return(
            <div>
                <div className="card text-center">
                    <div className="card-header">Featured</div>
                        <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}