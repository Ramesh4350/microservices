import React, {Component} from 'react';
import * as classes from "./ProductDetail.css";

import axios from "axios"
import Spinner from "../../components/UI/Spinner/Spinner";


class ProductDetail extends Component {
    state = {
        product: []
    }

    componentDidMount() {
        const {match: {params}} = this.props;
        axios.get(`https://product-ms.herokuapp.com/product/${params.productId}`)
            .then(response => {
                console.log(response.data)
                this.setState({product: response.data});
            })
            .catch(error => {
                this.setState({error: true});
            });
    }

    render() {
        return (
            this.state.product.length ==null? <div className={classes.productDetail}>
                <div className={classes.productLogoAndTile}>
                    <h4>{this.state.product['description']}</h4>
                    <h3 className={classes.ean}>{this.state.product['ean']}</h3>
                    <img src={this.state.product['mediaURL']} alt="My Product" className={classes.productDetailLogo}/>
                </div>
                <div className={classes.productSpecification}>
                    <h2>£{this.state.product['listPrice']}</h2>
                    <p>Delivery Method</p>
                    <div className={classes.delivery_method}>
                        <select className={classes.delivery_select}>
                            {/*<option value="1">{this.state.product['shippingMethods']}</option>*/}
                            <option value="1">Home Delivery</option>
                            <option value="2">Click and Collect</option>
                        </select>
                    </div>
                    <div>
                        <button className={classes.button}
                                onClick={() => this.props.productAdded(this.state.product)}>ADD TO CART
                        </button>
                    </div>
                </div>
            </div> : <Spinner/>

        );
    }
}

export default ProductDetail;