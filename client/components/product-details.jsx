import React from "react";

export default class ProductDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            products : null
        }
    }

    componentDidMount() {
        fetch("/api/products.php?id=1")
        .then(res => res.json())
        .then(obj => {this.setState({ products : obj })
        })
    }

    render() {
        let product = this.state.products;
        console.log('Product Detail: ', product)
        if( product !== null ){
        return(
            <div className="container">
                <div className = "row">
                    <div className = "col-6">
                        <img className = "product-image" src={product.image}/>
                    </div>
                    <div className = "col-6">
                        Product info
                        <div>{product.name}</div>
                        <div>{product.price}</div>
                        <div>{product.shortDescription}</div>
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