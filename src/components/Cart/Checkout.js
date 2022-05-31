import React from "react";
import useInput from "../../hooks/use-input";

const Checkout = () => {
  const {
    value: nameInput,
    isValid: nameIsValid,
    hasError: nameHasError,
    onChangeHandler: nameChangeHandler,
    onBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailInput,
    isValid: emailIsValid,
    hasError: emailHasError,
    onChangeHandler: emailChangeHandler,
    onBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(nameInput, emailInput);

    resetName();
    resetEmail();
  };

  return (
    <form onSubmit={submitHandler}>
      <span>Checkout</span>
      <div>
        <label htmlFor="name">First name and last name</label>
        <input
          id="name"
          type="text"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={nameInput}
        />
        {nameHasError && <p>This shoud not be empty!</p>}
      </div>
      <div>
        <label htmlFor="email">Adresse E-mail</label>
        <input
          id="email"
          type="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailInput}
        />
        {emailHasError && <p>Please enter a valid E-mail</p>}
      </div>
      <div>
        <label htmlFor="adress">Delivery Adresse</label>
        <input id="adress" type="text" />
      </div>
      <button type="submit" disabled={!formIsValid}>
        Order
      </button>
    </form>
  );
};

export default Checkout;
