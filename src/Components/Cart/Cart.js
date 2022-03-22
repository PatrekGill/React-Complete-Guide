import React, { useContext } from "react";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import CartContext from "../../Store/cart-context";

// const DUMMY_CART = [
//     {
//         id: Math.random().toString(),
//         name: "Sushi",
//         amount: 3,
//         price: 16.5,
//     },
// ];

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const cartTotal = cartCtx.totalAmount.toFixed(2);

    const cartItems = cartCtx.items.map((item) => {
        return (
            <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
            />
        );
    });

	const hasItems = cartItems.length > 0;

    const cartCloseHandler = () => {
        props.onClose();
    };

    return (
        <Modal onClose={cartCloseHandler}>
            <div>
                <header>
                    <h2>Your Cart</h2>
                </header>
                <ul className={classes["cart-items"]}>{cartItems}</ul>
                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>${cartTotal}</span>
                </div>
                <div className={classes.actions}>
                    <button
                        className={classes["button--alt"]}
                        onClick={cartCloseHandler}
                    >
                        Close
                    </button>
                    {hasItems && <button className={classes.button}>Order</button>}
                </div>
            </div>
        </Modal>
    );
};

export default Cart;
