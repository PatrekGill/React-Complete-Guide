import { useSelector, useDispatch } from "react-redux";
import classes from "./Auth.module.css";
import { authActions } from "../store/auth";
import { Fragment } from "react";

const Auth = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    const logInHandler = () => {
        dispatch(authActions.login());
    };

    return (
        <Fragment>
            {!auth.isAuthenticated && (
                <main className={classes.auth}>
                    <section>
                        <form>
                            <div className={classes.control}>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" />
                            </div>
                            <div className={classes.control}>
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" />
                            </div>
                            <button onClick={logInHandler}>Login</button>
                        </form>
                    </section>
                </main>
            )}
        </Fragment>
    );
};

export default Auth;
