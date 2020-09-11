import React, {Component} from 'react';
import ProductList from "../../components/productList/productList";
import * as classes from "./orderBuilder.css";

class OrderBuilder extends Component {

    render() {

        let ProductListSummary = this.props.products.map(product => <ProductList key={product['categoryId']}
                                                                                 productDetail={product}
                                                                                 productAdded={()=>this.props.addProductToCart(product)}/>)
        return (
            <div>
                <section className={classes.products}>
                    {ProductListSummary}
                </section>
            </div>
        );
    }
}

export default OrderBuilder;