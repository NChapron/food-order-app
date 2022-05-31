import React from "react";
import useInput from "../../hooks/use-input";

import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() !== "";
const isSupToFive = (value) => value.trim().length >= 5;

const Checkout = (props) => {
  const {
    value: nameInput,
    isValid: nameIsValid,
    hasError: nameHasError,
    onChangeHandler: nameChangeHandler,
    onBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isEmpty);

  const {
    value: streetInput,
    isValid: streetIsValid,
    hasError: streetHasError,
    onChangeHandler: streetChangeHandler,
    onBlurHandler: streetBlurHandler,
    reset: resetStreet,
  } = useInput(isEmpty);

  const {
    value: postcodeInput,
    isValid: postcodeIsValid,
    hasError: postcodeHasError,
    onChangeHandler: postcodeChangeHandler,
    onBlurHandler: postcodeBlurHandler,
    reset: resetPostcode,
  } = useInput(isSupToFive);

  const {
    value: cityInput,
    isValid: cityIsValid,
    hasError: cityHasError,
    onChangeHandler: cityChangeHandler,
    onBlurHandler: cityBlurHandler,
    reset: resetCity,
  } = useInput(isEmpty);

  let formIsValid = false;

  if (nameIsValid && streetIsValid && postcodeIsValid && cityIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(nameInput, streetInput, postcodeInput, cityInput);

    resetName();
    resetStreet();
    resetPostcode();
    resetCity();
  };

  const classesIsValid = (hasError) => {
    if (hasError) {
      return `${classes.control} ${classes.invalid}`;
    }
    return classes.control;
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classesIsValid(nameHasError)}>
        <label htmlFor="name">Your name</label>
        <input
          id="name"
          type="text"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={nameInput}
        />
        {nameHasError && (
          <p className={classes.textError}>Please enter a valid name!</p>
        )}
      </div>
      <div className={classesIsValid(streetHasError)}>
        <label htmlFor="street">Street</label>
        <input
          id="street"
          type="text"
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
          value={streetInput}
        />
        {streetHasError && (
          <p className={classes.textError}>Please enter a valid Street!</p>
        )}
      </div>
      <div className={classesIsValid(postcodeHasError)}>
        <label htmlFor="postcode">Postcode</label>
        <input
          id="postcode"
          type="text"
          onChange={postcodeChangeHandler}
          onBlur={postcodeBlurHandler}
          value={postcodeInput}
        />
        {postcodeHasError && (
          <p className={classes.textError}>Please enter a valid Postcode</p>
        )}
      </div>
      <div className={classesIsValid(cityHasError)}>
        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
          value={cityInput}
        />
        {cityHasError && (
          <p className={classes.textError}>Please enter a valid City name</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button
          className={classes.submit}
          type="submit"
          disabled={!formIsValid}
        >
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
