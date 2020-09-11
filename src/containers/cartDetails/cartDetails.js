import React, {Component} from 'react';
import "./cardDetails.scss";
import {Aux} from "../../hoc/Aux";
import Cart from "../../components/cart/Cart";

class CartDetails extends Component {

    render() {
        let productInCart;
        if (this.props.addedProductsToCart['items']) {
             productInCart = this.props.addedProductsToCart['items'].map(product => <Cart product={product}/>)
        } else {
            productInCart = <p>Cart is empty</p>
        }

        return (
            <Aux>
                <div className="wrap cf">
                    {/*<h1 className="projTitle">Shopping Cart</h1>*/}
                    <div className="heading cf">
                        <h1>My Cart</h1>
                        <a href="#" className="continue">Continue Shopping</a>
                    </div>
                    <div className="cart">
                        <ul className="cartWrap">
                            {productInCart}
                        </ul>
                    </div>

                    <div className="promoCode"><label htmlFor="promo">Have A Promo Code?</label><input type="text"
                                                                                                       name="promo"
                                                                                                       placholder="Enter Code"/>
                        <a href="#" className="btn"/></div>

                    <div className="subtotal cf">
                        <ul style={{listStyle: "none"}}>
                            <li className="totalRow final"><span className="label">Total</span><span
                                className="value">£{this.props.addedProductsToCart['totalPrice']}</span></li>
                            <li className="totalRow"><a href="/checkout" className="btn continue">Checkout</a></li>
                        </ul>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default CartDetails;
