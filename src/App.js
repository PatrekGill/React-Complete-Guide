import React, { Fragment, useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";


function App() {
	const [cartIsShown, setCartIsShown] = useState(false);
	const cartShowHideHandler = () => {
		setCartIsShown(!cartIsShown);
	};


    return (
        <Fragment>
			{cartIsShown && <Cart onClose={cartShowHideHandler}/>}
			<Header onPressCartButton={cartShowHideHandler} />
			<main>
				<Meals />
			</main>
        </Fragment>
    );
}

export default App;
