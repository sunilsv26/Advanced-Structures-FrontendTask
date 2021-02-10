import React, { useState } from "react";
import Input from './input/input';
import classes from "./auth.module.css";

const Auth = () => {
  const [controls, setControls] = useState({
    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "Your Email Address",
      },
      value: "",
      validation: {
        isRequired: true,
        isEmail: true,
      },
      valid: false,
      touched: false,
    },
    password: {
      elementType: "input",
      elementConfig: {
        type: "password",
        placeholder: "Password",
      },
      value: "",
      validation: {
        isRequired: true,
        minLength: 6,
      },
      valid: false,
      touched: false,
    },
  });

  const [isSignUp, setIsSignUp] = useState(false);

  const inputChangedHandler = (event, key) => {
    const updatedControl = { ...controls };
    const updatedFormEl = { ...updatedControl[key] };
    updatedFormEl.value = event.target.value;
    updatedFormEl.touched = true;
    updatedFormEl.valid = formValidationHandler(
      updatedFormEl.value,
      updatedFormEl.validation
    );
    updatedControl[key] = updatedFormEl;
    setControls(updatedControl);
  };

  const  formValidationHandler = (value, rule) => {
    let isValid = true;
    if (rule.isRequired) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rule.minLength) {
      isValid = value.trim().length >= rule.minLength && isValid;
    }
    if (rule.isEmail) {
      const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      isValid = pattern.test(value) && isValid;
    }
    return isValid;
  };
  const  swithSign = () => {
    setIsSignUp(!isSignUp);
  };

  const  submitHandler = () => {
    console.log(1);
  };

  let controlsArray = [];
  for (let key in controls) {
    controlsArray.push({ id: key, Config: controls[key] });
  }
  let form = (
    <form onSubmit={(event) => event.preventDefault()}>
      {controlsArray.map((formEl) => (
        <Input
          key={formEl.id}
          elementType={formEl.Config.elementType}
          elementConfig={formEl.Config.elementConfig}
          value={formEl.Config.value}
          changed={(event) =>inputChangedHandler(event, formEl.id)}
          invalid={!formEl.Config.valid}
          touched={formEl.Config.touched}
        />
      ))}
      <button
        disabled={!controls.password.valid || !controls.email.valid}
        onClick={submitHandler}
      >
        {isSignUp ? "Sign Up" : "Sign In"}
      </button>
      <br />
      <button onClick={swithSign} className={classes.Sign}>
        Switch to {isSignUp ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
  return <div className={classes.Controls}>{form}</div>;
};

export default Auth;