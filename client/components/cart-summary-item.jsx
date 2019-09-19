import React from 'react';

export default class CartSummaryItem extends React.Component{
    render(){
        let item = this.props.cartItem;
        console.log("key: ", this.props.cartItem.id)
        return (
            <div className="card text-center">
                <div className="cart-summary">
                <h5 className="cart-title">{item.name}</h5>
                    <div className="cart-image">
                        <img src={ item.image } className="card-img-top"/>
                    </div>
                    <div className="cart-details">
                        <p className="text-truncate">{item.shortDescription}</p>
                        <p className="text-truncate">{item.price}</p>
                    </div>
                </div>         
            </div>
        )
    }
}