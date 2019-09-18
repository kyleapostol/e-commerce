import React from 'react';

export default class CartSummaryItem extends React.Component{
    render(){
        let item = this.props.cartItem;
        console.log("cart items::::: ", item);
        return (
            <div className="card text-center">
                <div className="card-body">
                <h5 className="card-title cart-title">{item.name}</h5>
                    <div className="cart-image">
                        <img src={ item.image } className="card-img-top "/>
                    </div>
                    <div className="cart-details">
                        <p className="card-text">{item.shortDescription}</p>
                        <p className="card-text">{item.price}</p>
                    </div>
                </div>         
            </div>
        )
    }
}