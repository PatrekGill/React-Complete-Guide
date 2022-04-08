import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
    {
        id: 0,
        title: "Test",
        price: 6,
        amount: 1,
        description: "This is a first product - amazing!",
    },
];

const Products = (props) => {
    const items = DUMMY_PRODUCTS.map((item) => (
        <ProductItem key={item.id} item={item} />
    ));

    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>{items}</ul>
        </section>
    );
};

export default Products;
