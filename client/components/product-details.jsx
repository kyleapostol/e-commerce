import React from "react";
import Carousel from "./carousel";
import Dropdown from "./dropdown";

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
//fetch(`/apiproducts.php?id=${this.props.viewParams}`)
        fetch("/api/products.php?id=" + this.props.viewParams)
        .then(res => res.json())
        .then(obj => {this.setState({ products : obj[0] })
        })
    }

    handleUserFeedBack(){
        this.setState({cartStatus: "Cart Updated"})
        setTimeout( () => { this.setState({ cartStatus : "Add to Cart" }) }, 1000)
    }

    render() {
        let product = this.state.products;
        console.log("products: ", product);
        if( product !== null ){
            console.log('Products: ', product);
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className= "fas fa-arrow-left arrow-margin" onClick={ () => this.props.setView('catalog', {}) }>
                        <a>{"< continue shopping"} </a></div>
                    </div>
                </div>
                <div className="container product-background-color">
                    <div className = "row details-row">
                        <div className = "col-8">
                            <Carousel products={product.images}></Carousel>
                        </div>
                        <div className= "col-4 product-description-row">
                            <div className= "font-weight-bold product-title">{ product.name }</div>
                                <div className="mb-3">${ product.price }</div>
                                <div>Color: { product.color }</div>
                                <div>
                                    <Dropdown/>
                                </div>
                                <button type="button" 
                                    className="btn btn-success btn-lg add-to-cart-btn" 
                                    onClick = { () => { 
                                        this.props.addToCart(product) 
                                        this.handleUserFeedBack() }}>
                                    {this.state.cartStatus}
                                </button>
                            <div className="text-center text-wrap text-muted">Free Shipping and Returns</div>
                        </div>
                    </div>
                </div>

                <div className='container'>  
                    <div className="row description-background" id="description-background-x">
                        <div className='description-content text-center'>
                            <div className="product-title">{ product.name }
                            </div>
                            <p className='text-wrap font-weight-normal product-description'>{ product.shortdescription }</p>
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
