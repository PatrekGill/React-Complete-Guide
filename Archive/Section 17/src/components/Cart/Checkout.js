import { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";
const isFiverChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        postaCode: true,
    });

    const nameRef = useRef("");
    const streetRef = useRef("");
    const postalCodeRef = useRef();
    const cityRef = useRef("");

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredName = nameRef.current.value;
        const enteredStreet = streetRef.current.value;
        const enteredPostal = postalCodeRef.current.value;
        const enteredCity = cityRef.current.value;

        const nameIsValid = !isEmpty(enteredName);
        const streetIsValid = !isEmpty(enteredStreet);
        const cityIsValid = !isEmpty(enteredCity);
        const postalIsValid = isFiverChars(enteredPostal);

        setFormInputsValidity({
            name: nameIsValid,
            street: streetIsValid,
            city: cityIsValid,
            postaCode: postalIsValid,
        });

        const formIsValid =
            nameIsValid && streetIsValid && postalIsValid && cityIsValid;

        // console.log(nameRef.current.value);
        // console.log(streetRef.current.value);
        // console.log(postalCodeRef.current.value);
        // console.log(cityRef.current.value);

        if (!formIsValid) {
            return;
        }

        const userDetails = {
            name: enteredName,
            street: enteredStreet,
            postal: enteredPostal,
            city: enteredCity,
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
				{!formInputsValidity.name && <p>Please enter a valid name.</p>}
            </div>
            <div>
                <label htmlFor="street">Street Address</label>
                <input id="street" type="text" ref={streetRef} />
				{!formInputsValidity.street && <p>Please enter a valid street address.</p>}
            </div>
            <div>
                <label htmlFor="postal">Postal Code</label>
                <input id="postal" type="text" ref={postalCodeRef} />
				{!formInputsValidity.postaCode && <p>Please enter a valid postal code.</p>}
            </div>
            <div>
                <label htmlFor="city">City</label>
                <input id="city" type="text" ref={cityRef} />
				{!formInputsValidity.city && <p>Please enter a valid city.</p>}
            </div>
            <button onClick={cancelOrderHandler}>Cancel</button>
            <button>Confirm</button>
        </form>
    );
};

export default Checkout;
