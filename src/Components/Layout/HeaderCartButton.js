import React, {useContext} from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/cart-context";
import classes from "./HeaderCart.module.css";

const HeaderCartButton = (props) => {
	const cartCtx = useContext(CartContext);
	const numberOfCarItems = cartCtx.items.reduce((currentNumber,item) => {
		return currentNumber + item.amount;
	}, 0);

	return (
		<button className={classes.button} onClick={props.onClick}>
			<span className={classes.icon}>
				<CartIcon/>
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>
				{numberOfCarItems}
			</span>
		</button>
	);
};

export default HeaderCartButton;