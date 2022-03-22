import React, { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Store/CartProvider";


function App() {
	const [cartIsShown, setCartIsShown] = useState(false);
	const cartShowHideHandler = () => {
		setCartIsShown(!cartIsShown);
	};


    return (
        <CartProvider>
			{cartIsShown && <Cart onClose={cartShowHideHandler}/>}
			<Header onPressCartButton={cartShowHideHandler} />
			<main>
				<Meals />
			</main>
        </CartProvider>
    );
}

export default App;
