import classes from "./CartButton.module.css";

import { cartActions } from "../../store/cartStore";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
	const distpatch = useDispatch();
	const isCartOpen = useSelector((state) => state.cart.isCartOpen);
	const cartButtonHandler = () => {
		if (isCartOpen) {
			distpatch(cartActions.closeCart());
		} else {
			distpatch(cartActions.openCart());
		};
	};
	
    return (
        <button onClick={cartButtonHandler} className={classes.button}>
            <span>My Cart</span>
            <span className={classes.badge}>1</span>
        </button>
    );
};

export default CartButton;
