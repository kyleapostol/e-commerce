import React from 'react';
import Quantity from './quantity'

export default class CartSummaryItem extends React.Component{
    render(){
        let item = this.props.cartItem;
        return (
            <div className="cart-margin">            
                <div className="container cart-container">
                    <div className="row">
                        <div className="col">
                            <img src={ item.image } className="card-img-top card-img-top-2 card-img-top__ipad"/>
                        </div>
                        <div className="col">
                            <ul className="mt-3 ipad-description-content">
                                <li><b>Name:</b> { item.name }</li>
                                <li><b>Color:</b> { item.color }</li>
                                <li><b>Price:</b> { item.price }</li>
                                <li>
                                    <Quantity
                                        item={ item }
                                        delete={ this.handleDelete }>
                                    </Quantity>
                                </li>
                                {/* <li><b>Qyt:</b> {item.count}</li>
                                <button type="button" className="btn btn-danger btn-sm mt-5">Delete</button> */}
                            </ul> 
                        </div>
                    </div>
                </div>
            </div>

        )

    }
}
