import React from 'react';

export default class CartSummaryItem extends React.Component{
    render(){
        let item = this.props.cartItem;
        let total = this.props.cartTotal;

        return (
            <div className="cart-margin">            
                <div className="container cart-container">
                    <div className="row">
                        <div className="col">
                            <img src={ item.image } className="card-img-top"/>
                        </div>
                        <div className="col">
                            <ul>
                                <li>Size:</li>
                                <li>Color: { item.color }</li>
                                <li>Price: { item.price }</li>
                                <li>Qyt: 1</li>
                            </ul> 
                        </div>
                    </div>
                </div>
            </div>

        )

    }
}
