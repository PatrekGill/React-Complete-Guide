import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

// products are added to cart when clicking on the "add to cart" button
// product count is increases/decreased when adding/removing from cart
// cart +/- buttons also increase or decrease the amount of items and eventually can remove and item

function App() {
    const isCartOpen = useSelector((state) => state.cart.isCartOpen);

    return (
        <Layout>
            {isCartOpen && <Cart />}
            <Products />
        </Layout>
    );
}

export default App;
