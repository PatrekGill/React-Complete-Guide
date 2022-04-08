import classes from "./CartButton.module.css";

import { cartActions } from "../../store/cartStore";
import { useDispatch, useSelector } from "react-redux";

const CartButton = () => {
	const distpatch = useDispatch();
	const numberOfItems = useSelector(state => state.cart.numberOfItems);
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
            <span className={classes.badge}>{numberOfItems}</span>
        </button>
    );
};

export default CartButton;
