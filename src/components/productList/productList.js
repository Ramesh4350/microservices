import React from 'react';
import * as classes from "./productList.css"
import {Aux} from "../../hoc/Aux";
import {Link} from "react-router-dom";

const ProductList = (props) => {

    return (
        <Aux>
            <div className={classes.product_card}>
                <Link to={"/productDetail/"+props.productDetail['ean']}>
                    <div className={classes.product_image}>
                        <img src={props.productDetail['mediaURL']} alt="loading"/>
                    </div>
                </Link>
                <div className={classes.product_info}>
                    <h4>{props.productDetail['ean']}</h4>
                    <h4>{props.productDetail['description']}</h4>
                    <h4>£{props.productDetail['listPrice']}</h4>
                </div>
                <div>
                    <button className={classes.button} onClick={props.productAdded}>ADD TO CART</button>
                </div>
            </div>
        </Aux>
    );
}

export default ProductList;