import React, { useState } from "react";
import Input from "./input/input";
import classes from "./auth.module.css";
import axios from 'axios';


const Auth = (props) => {
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

  const formValidationHandler = (value, rule) => {
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
  const swithSign = () => {
    setIsSignUp(!isSignUp);
  };

  const submitHandler = (ev) => {
    ev.preventDefault();
    const authData = {
      email: controls.email.value,
      password: controls.password.value,
      returnSecureToken: true,
    };
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDJGA586N4F79dojyzm3ONogqwcKdZJEXU'
    if(isSignUp){
      url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDJGA586N4F79dojyzm3ONogqwcKdZJEXU'
    }
    axios.post(url,authData)
        .then(resp=>{
            const tokenId= resp.data.idToken;
            const userId= resp.data.localId;
            const expirationDate  = new Date(new Date().getTime() + resp.data.expiresIn*1000) 
            localStorage.setItem('token',tokenId);
            localStorage.setItem('expirationDate',expirationDate)
            localStorage.setItem('userId',userId)
            window.location.reload()}
           ).catch(error=>{alert(error.response.data.error.message);})
  }

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
          changed={(event) => inputChangedHandler(event, formEl.id)}
          invalid={!formEl.Config.valid}
          touched={formEl.Config.touched}
        />
      ))}
      <button
        disabled={!controls.password.valid || !controls.email.valid}
        onClick={(ev) => submitHandler(ev)}
      >
       {isSignUp ? "Sign In" : "Sign Up"}
      </button>
      <br />
      <button onClick={swithSign} className={classes.Sign}>
        Switch to {isSignUp ? "Sign Up" : "Sign In"}
      </button>
    </form>
  );
  return <div className={classes.Controls}>{form}</div>;
};

export default Auth;
