import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

// eventhandler code
const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const item = action.item;
        const existingItem = state.items.find(
            (element) => element.id === item.id
        );

        let updatedItems = state.items;
        if (existingItem) {
            existingItem.amount++;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        const updatedTotalAmount =
            state.totalAmount + action.item.price * action.item.amount;

		console.log("Total Updated Up");
		console.log(updatedTotalAmount);
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    if (action.type === "REMOVE") {
        const existingItemIndex = state.items.findIndex(
            (element) => element.id === action.id
        );

        let updatedItems = state.items;
        let updatedTotalAmount = state.totalAmount;

        if (existingItemIndex >= 0) {
            const existingItem = state.items.at(existingItemIndex);
            console.log("Existing Item");
            console.log(existingItem);
            existingItem.amount--;

            if (existingItem.amount <= 0) {
                updatedItems = state.items.filter(
                    (element, index) => index !== existingItemIndex
                );
                console.log("Performed Filter: ");
                console.log("State Items");
                console.log(state.items);
            }

            updatedTotalAmount = state.totalAmount - existingItem.price;
        }

        console.log("Updated Items");
        console.log(updatedItems);
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    return defaultCartState;
};

const CartProvider = (props) => {
    // add eventhandler to update the state
    // dispatchCartAction triggers the event
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    );

    const addItemToCartHandler = (item) => {
        dispatchCartAction({
            type: "ADD",
            item: item,
        });
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({
            type: "REMOVE",
            id: id,
        });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    // .provider allows for useContext react method to be invoked on compnent, which gives access to what is stored in value
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
