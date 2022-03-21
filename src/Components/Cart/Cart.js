import React from "react";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";



const DUMMY_CART = [
    {
        id: Math.random().toString(),
        name: "Sushi",
        amount: 3,
        price: 16.5,
    },
];


const Cart = (props) => {
	const cartItems = DUMMY_CART.map((item) => {
        return (
            <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
            />
        );
    });

    return (
        <Modal>
            <div>
                <header>
                    <h2>Your Cart</h2>
                </header>
                <ul className={classes["cart-items"]}>{cartItems}</ul>
				<div className={classes.total}>
					<span>Total Amount</span>
					<span>$80.00</span>
				</div>
				<div className={classes.actions}>
					<button className={classes["button--alt"]}>Close</button>
					<button className={classes.button}>Order</button>
				</div>
            </div>
        </Modal>
    );
};

export default Cart;
