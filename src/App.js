import { Fragment } from "react";
import Header from "./components/Header";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import store from "./store/index";

function App() {
    return (
        <Fragment>
            <Header />
            {
				!store.getState().auth.isAuthenticated &&
				<Auth />
			}
            <Counter />
        </Fragment>
    );
}

export default App;
