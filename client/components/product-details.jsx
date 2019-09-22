import React from "react";
import ProductSize from './product-size';

export default class ProductDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            products : null,
            cartStatus : "Add to Cart"
        }
        this.handleUserFeedBack = this.handleUserFeedBack.bind(this);
    }

    componentDidMount() {
        console.log("product-details props: ", this.props.viewParams);
//fetch(`/apiproducts.php?id=${this.props.viewParams}`)
        fetch("/api/products.php?id=" + this.props.viewParams)
        .then(res => res.json())
        .then(obj => {this.setState({ products : obj })
        })
    }

    handleUserFeedBack(){
        this.setState({cartStatus: "Cart Updated"})
        setTimeout( () => { this.setState({ cartStatus : "Add to Cart" }) }, 1000)
    }

    render() {
        let product = this.state.products;
        if( product !== null ){
            console.log('products: ', product)
        return(
            <React.Fragment>
                <div className="container product-background-color">
                    <div className = "row details-row">
                        <div className = "col-8">
                            <i className= "fas fa-arrow-left" onClick={ () => this.props.setView('catalog', {}) }></i>
                            <img className = "product-image" src={product.image}/>
                        </div>
                        <div className = "col-4 product-description-row">
                            <div className= "font-weight-bold product-title">{ product.name }</div>
                            <div>${ product.price }</div>
                            <div>Color: { product.color }</div>
                            <div>Size: </div>
                            {/* <ProductSize></ProductSize> */}
                            <button type="button" className="btn btn-success btn-lg add-to-cart-btn" 
                                onClick={ () => { 
                                    this.props.addToCart(product) 
                                    this.handleUserFeedBack()
                                    } }>
                                {this.state.cartStatus}
                            </button>
                            <div className="text-center text-wrap text-muted">Free Shipping and Returns</div>
                        </div>
                       
                    </div>
                </div>

                <div className='container-fluid product-details-footer'>  
                    <div className="row description-background">
                        <div className='description-content text-center'>
                            <div className="product-title">{ product.name }
                            </div>
                            <p className='text-wrap font-weight-normal product-description'>{ product.shortDescription }</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
        } else {
            return (
                <div>loading...</div>
            )
        }
    }
}          

{/* <div>{ product.shortDescription }</div> */}
