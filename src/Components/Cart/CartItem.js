import React, {useContext} from "react";

import classes from "./CartItem.module.css";
import CartContext from "../../Store/cart-context";

const CartItem = (props) => {
	const cartCtx = useContext(CartContext);
    const price = (props.price * props.amount).toFixed(2);

	const addItemHandler = () => {
		cartCtx.addItem({
			name: props.name,
			amount: 1,
			id: props.id,
			price: props.price
		});
	};

	const removeItemHandler = () => {
		cartCtx.removeItem(props.id);
	};

    return (
        <li className={classes["cart-item"]}>
            <div>
                <h2>{props.name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>$ {price}</span>
                    <span className={classes.amount}>X {props.amount}</span>
                </div>
            </div>
            <div className={classes.actions}>
                <button onClick={removeItemHandler}>-</button>
                <button onClick={addItemHandler}>+</button>
            </div>
        </li>
    );
};

export default CartItem;
