import React, {useContext} from "react";

import classes from "./CartItem.module.css";
import CartContext from "../../Store/cart-context";

const CartItem = (props) => {
	const cartCtx = useContext(CartContext);
	const item = props.item;
    const price = (item.price * item.amount).toFixed(2);

	const addItemHandler = () => {
		cartCtx.addItem({
			...item,
			amount: 1
		});
	};

	const removeItemHandler = () => {
		cartCtx.removeItem(item.id);
	};

    return (
        <li className={classes["cart-item"]}>
            <div>
                <h2>{item.name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>$ {price}</span>
                    <span className={classes.amount}>X {item.amount}</span>
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
