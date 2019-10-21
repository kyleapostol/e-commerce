import React from 'react';

export default class CartSummaryItem extends React.Component{
    render(){
        let item = this.props.cartItem;
        return (
            <div className="cart-margin">            
                <div className="container cart-container">
                    <div className="row">
                        <div className="col">
                            <img src={ item.image } className="card-img-top card-img-top-2"/>
                        </div>
                        <div className="col">
                            <ul>
                                <li><b>Name:</b> { item.name }</li>
                                <li><b>Color:</b> { item.color }</li>
                                <li><b>Price:</b> { item.price }</li>
                                <li><b>Qyt:</b> {item.count}</li>
                            </ul> 
                        </div>
                    </div>
                </div>
            </div>

        )

    }
}
