import React from "react";

export default class ProductDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            products : null
        }
    }

    componentDidMount() {
        console.log("product-details props: ", this.props.viewParams);
//fetch(`/apiproducts.php?id=${this.props.viewParams}`)
        fetch("/api/products.php?id=" + this.props.viewParams)
        .then(res => res.json())
        .then(obj => {this.setState({ products : obj })
        })
    }

    render() {
        let product = this.state.products;
        if( product !== null ){
            console.log('products: ', product)
        return(
            <React.Fragment>
                <div className="container product-background-color">
                    <div className = "row">
                        <div className = "col-8">
                            <i className= "fas fa-arrow-left" onClick={ () => this.props.setView('catalog', {}) }></i>
                            <img className = "product-image" src={product.image}/>
                        </div>
                        <div className = "col-4">
                            <div className= "font-weight-bold product-title">{ product.name }</div>
                            <div>${ product.price }</div>
                            <div>Color: { product.color }</div>
                            <div>Size:</div>
                            <button type="button" className="btn btn-success btn-lg" 
                                onClick={ () => { this.props.addToCart(product) } }>Add To Cart</button>
                        </div>
                    </div>
                </div>

                <div className='container-fluid'>  
                    <div className="row description-background">
                        <div className='description-content text-center'>
                            <div className="product-title">{ product.name }</div>
                            <p className='font-weight-normal'>{ product.shortDescription }</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
        } else {
            return (
                <div>loading</div>
            )
        }
    }
}          

{/* <div>{ product.shortDescription }</div> */}
