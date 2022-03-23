import React from "react";

import classes from "./Input.module.css";

// forwardRef allows the use of useRef/ref on custom components
const Input = React.forwardRef((props,ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input} />
        </div>
    );
});

export default Input;
