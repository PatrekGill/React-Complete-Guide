import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cartStore";

const CartItem = (props) => {
    const { title, price, amount } = props.item;
	const total = price * amount;
	const minItem = {
		...props.item,
		amount: 1
	};

	const distpatch = useDispatch();
	const removeFromCarthandler = () => {
		distpatch(cartActions.removeItemFromCart(minItem))
	};
	const addToCartHandler = () => {
		distpatch(cartActions.addItemToCart(minItem))
	};


    return (
        <li className={classes.item}>
            <header>
                <h3>{title}</h3>
                <div className={classes.price}>
                    ${total.toFixed(2)}{" "}
                    <span className={classes.itemprice}>
                        (${price.toFixed(2)}/item)
                    </span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{amount}</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={removeFromCarthandler}>-</button>
                    <button onClick={addToCartHandler}>+</button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
