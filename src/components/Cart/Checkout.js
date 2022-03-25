import { useRef } from "react";

const Checkout = (props) => {
    const nameRef = useRef("");
    const streetRef = useRef("");
    const postalCodeRef = useRef();
    const cityRef = useRef("");

    const submitHandler = (event) => {
        event.preventDefault();

        // console.log(nameRef.current.value);
        // console.log(streetRef.current.value);
        // console.log(postalCodeRef.current.value);
        // console.log(cityRef.current.value);
        const userDetails = {
            name: nameRef.current.value,
            street: streetRef.current.value,
            postal: postalCodeRef.current.value,
            city: cityRef.current.value,
        };

		props.onSubmitOrder(userDetails);
    };

	const cancelOrderHandler = () => {
		nameRef.current.value = "";
		streetRef.current.value = "";
		postalCodeRef.current.value = "";
		cityRef.current.value = "";

		props.onCancelOrder();
	};

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="name">Full Name</label>
                <input id="name" type="text" ref={nameRef} />
            </div>
            <div>
                <label htmlFor="street">Street Address</label>
                <input id="street" type="text" ref={streetRef} />
            </div>
            <div>
                <label htmlFor="postal">Postal Code</label>
                <input id="postal" type="text" ref={postalCodeRef} />
            </div>
            <div>
                <label htmlFor="city">City</label>
                <input id="city" type="text" ref={cityRef} />
            </div>
            <button onClick={cancelOrderHandler}>Cancel</button>
            <button>Confirm</button>
        </form>
    );
};

export default Checkout;
