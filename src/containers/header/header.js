import React, {Component} from 'react';
import * as classes from "./header.css";
import {Aux} from "../../hoc/Aux";
import {Link} from "react-router-dom";

class Header extends Component {
    render() {

        const inputClasses = [classes.main_nav__item, classes.main_nav__cta];
        let Qty = this.props.cartQty ? <span className={classes.header_cart__qty}>{this.props.cartQty}</span> : null;
        return (
            <Aux>
                <div className={classes.backdrop}/>
                <header className={classes.main_headers}>
                    <button className={classes.toggle_button}>
                        <span className={classes.toggle_button__bar}/>
                        <span className={classes.toggle_button__bar}/>
                        <span className={classes.toggle_button__bar}/>
                    </button>
                    <div className={classes.main_header}>
                        <Link to="/" className={classes.main_header__brand}>
                            B&Q</Link>
                    </div>

                    <nav className={classes.main_nav}>
                        <ul className={classes.main_nav__items}>
                            {/*  <li className={classes.main_nav__item}>SignUp</li>
                        <li className={classes.main_nav__item}>SignIn</li>*/}
                            <li><Link to="/cart"><img
                                src="https://img.icons8.com/material-outlined/48/000000/shopping-cart.png"
                                alt="your cart is coming" className={classes.main_header__cart}/>
                                {Qty}
                            </Link></li>
                        </ul>
                    </nav>
                </header>
                <nav className={classes.mobile_nav}>
                    <ul className={classes.mobile_nav__items}>
                        <li className={classes.mobile_nav__item}>
                            <a href="/signUp">SignUp</a>
                        </li>
                        <li className={classes.mobile_nav__items}>
                            <a href="./signin">Signin</a>
                        </li>
                        <li className={inputClasses.join(' ')}>
                            <a href="/cart">Add To Cart</a>
                        </li>
                    </ul>
                </nav>
                <main>
                    {this.props.children}
                </main>
            </Aux>

        );
    }
}

export default Header;