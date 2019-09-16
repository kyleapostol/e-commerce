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
            <div className="container">
                <div className = "row">
                    <div className = "col-6">
                        <i className="fas fa-arrow-left" onClick={ () => this.props.setView('catalog', {}) }></i>
                        <img className = "product-image" src={product.image}/>
                    </div>
                    <div className = "col-6">
                        Product info
                        <div>{product.name}</div>
                        <div>{product.price}</div>
                        <div>{product.shortDescription}</div>
                        <button type="button" className="btn btn-success" 
                                onClick={ () => { this.props.addToCart(product) } }>Add To Cart</button>
                    </div>
                </div>
                <div className="row">
                    <div>{product.longDescription}</div>
                </div>
            </div>
        )
        } else {
            return (
                <div>loading</div>
            )
        }
    }
}