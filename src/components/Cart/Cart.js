import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems).map(
        (item) => {
            return <CartItem key={item.id} item={item} />;
        }
    );

    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>{cartItems}</ul>
        </Card>
    );
};

export default Cart;
