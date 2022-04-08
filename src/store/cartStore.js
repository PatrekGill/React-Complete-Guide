import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    total: 0,
    isCartOpen: false,
    cartItems: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        openCart(state) {
            state.isCartOpen = true;
        },
        closeCart(state) {
            state.isCartOpen = false;
        },
        addItemToCart(state, action) {
            const payloadItem = action.payload;
            state.total = state.total + payloadItem.price * payloadItem.amount;

            const cartItems = state.cartItems;
            const existingCartItemIndex = cartItems.findIndex(
                (item) => item.id === payloadItem.id
            );
            const existingItem = cartItems[existingCartItemIndex];

            if (existingItem) {
                const updatedItem = {
                    ...existingItem,
                    amount: existingItem.amount + payloadItem.amount,
                };
                cartItems[existingCartItemIndex] = updatedItem;
            } else {
                cartItems.push(payloadItem);
            }
        },
        removeItemFromCart(state, action) {
            const payloadItem = action.payload;
            const cartItems = state.cartItems;
            const existingCartItemIndex = cartItems.findIndex(
                (item) => item.id === payloadItem.id
            );

            const existingCartItem = cartItems[existingCartItemIndex];
            if (existingCartItem) {
                state.total =
                    state.total - payloadItem.price * payloadItem.amount;

                if (existingCartItem.amount === 1) {
                    cartItems.splice(existingCartItemIndex, 1);
                } else {
                    const updatedItem = {
                        ...existingCartItem,
                        amount: existingCartItem.amount - payloadItem.amount,
                    };
                    cartItems[existingCartItemIndex] = updatedItem;
                }
            }
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
