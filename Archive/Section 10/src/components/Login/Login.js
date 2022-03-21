import React, {
    useState,
    useEffect,
    useReducer,
    useContext,
    useRef,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../store/auth-context";
import UserInput from "../UI/UserInput/UserInput";

const emailReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        return { value: action.val, isValid: action.val.includes("@") };
    }
    if (action.type === "INPUT_BLUR") {
        return { value: state.value, isValid: state.value.includes("@") };
    }

    return {
        value: "",
        isValid: false,
    };
};

const passwordReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        return { value: action.val, isValid: action.val.trim().length > 6 };
    }
    if (action.type === "INPUT_BLUR") {
        return { value: state.value, isValid: state.value.trim().length > 6 };
    }

    return {
        value: "",
        isValid: false,
    };
};

const Login = (props) => {
    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: "",
        isValid: null,
    });

    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: "",
        isValid: null,
    });

    const authCtx = useContext(AuthContext);

    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passwordState;

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log("checking validity");
            setFormIsValid(emailIsValid && passwordIsValid);
        }, 500);

        return () => {
            console.log("cleanup");
            clearTimeout(identifier);
        };
    }, [emailIsValid, passwordIsValid]);

    const emailChangeHandler = (event) => {
        dispatchEmail({ type: "USER_INPUT", val: event.target.value });
    };

    const passwordChangeHandler = (event) => {
        dispatchPassword({ type: "USER_INPUT", val: event.target.value });
    };

    const validateEmailHandler = () => {
        // setEmailIsValid(emailState.isValid);
        dispatchEmail({ type: "INPUT_BLUR" });
    };

    const validatePasswordHandler = () => {
        // setPasswordIsValid(emailState.isValid);
        dispatchPassword({ type: "INPUT_BLUR" });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (formIsValid) {
            authCtx.onLogin(emailState.value, passwordState.value);
        } else if (!emailIsValid) {
			emailInputRef.current.focus();
        } else {
			passwordInputRef.current.focus();
        }
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <UserInput
                    ref={emailInputRef}
                    isValid={emailState.isValid}
                    label="E-Mail"
                    id="email"
                    type="email"
                    value={emailState.value}
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}
                />
                <UserInput
                    ref={passwordInputRef}
                    isValid={passwordState.isValid}
                    label="Password"
                    id="password"
                    type="password"
                    value={passwordState.value}
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}
                />
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
