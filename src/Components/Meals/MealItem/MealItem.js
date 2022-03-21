import React from "react";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <p className={classes.description}>{props.description}</p>
                <h2 className={classes.price}>{price}</h2>
            </div>
            <div>
                <MealItemForm data={{id: props.id}}/>
            </div>
        </li>
    );
};

export default MealItem;
