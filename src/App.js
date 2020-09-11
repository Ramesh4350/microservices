import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import OrderBuilder from "./containers/orderBuilder/orderBuilder";
import CartDetails from "./containers/cartDetails/cartDetails";
import Checkout from "./components/checkout/checkout";
import ProductDetail from "./containers/ProductDetails/ProductDetail";
import Header from "./containers/header/header";
import axios from "axios";
import Spinner from "./components/UI/Spinner/Spinner";

class App extends Component {
    state = {
        CartQuantity: 0,
        products: [],
        product: []
    }
    fulfillmentTypePreset;

    componentDidMount() {
        axios.get('https://product-ms.herokuapp.com/products/')
            .then(response => {
                this.setState({products: response.data});
            })
            .catch(error => {
                this.setState({error: true});
            });
    }

    addProductCartHandler = (product) => {
        console.log(product['ean'])
        const productData = {
            "ean": product['ean'],
            "fulfillmentType": 'Home Delivery',
            "qty": 1,
            "unitPrice": product['listPrice']
        }
        axios.post('https://basket-ms.herokuapp.com/basket/addItem/o9', productData).then(response => {

            this.setState({product: response.data});
        })
            .catch(error => {
                this.setState({error: true});
            });
        console.log(this.state.product['items'])
        let oldCartQuantity = this.state.CartQuantity;
        let updatedCartQuantity = oldCartQuantity + 1;
        let updatedCart = {
            ...this.state.CartQuantity
        };
        updatedCart = updatedCartQuantity;
        this.setState({CartQuantity: updatedCart});
    }


    render() {

        return (
            <div>
                <Header cartQty={this.state.CartQuantity}>
                    <Route path="/checkout" exact component={Checkout}/>
                    <Route
                        path="/cart"
                        exact render={props => <CartDetails {...props} addedProductsToCart={this.state.product}
                                                            products={this.state.products}/>}/>

                    <Route path="/productDetail/:productId" exact
                           render={(props) => <ProductDetail {...props} productAdded={this.addProductCartHandler}/>}/>

                    <Route
                        path='/' exact
                        render={props => (
                            this.state.products.length ?
                                <OrderBuilder {...props} addProductToCart={this.addProductCartHandler}
                                              products={this.state.products}/> :
                                <Spinner {...props}/>
                        )}
                    />
                </Header>
            </div>
        );
    }
}

export default App;
