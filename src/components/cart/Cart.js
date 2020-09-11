import React, {useState} from 'react';
import "./Cart.scss";
import {Aux} from "../../hoc/Aux";

const Cart = (props) => {
    const [count, setCount] = useState(1);
    const updateInputValue = (event) => {
        setCount({
                count: event.target.value
            }
        )
        console.log(count)
    };
    return (

        <Aux>
            <li className="items odd">

                <div className="infoWrap">
                    <div className="cartSection">
                        <img src={props.product['mediaURL']} alt="Coming soon.."
                             className="itemImg"/>
                        <p className="itemNumber">{props.product['ean']}</p>
                        <h3>{props.product['description']}</h3>

                        <p><input type="text" className="qty" placeholder={count}
                                  onChange={updateInputValue}/> x £{props.product['unitPrice']}</p>

                        <p className="stockStatus"> In Stock</p>
                    </div>
                    <div className="prodTotal cartSection">
                        <p>£{props.product['totalPrice']}</p>
                    </div>
                    <div className="cartSection removeWrap">
                        <a href="#" className="remove">x</a>
                    </div>
                </div>
                <hr/>
            </li>
        </Aux>
    );
}

export default Cart;