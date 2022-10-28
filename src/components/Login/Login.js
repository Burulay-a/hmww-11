import React, {useEffect, useState } from 'react';
import {useReducer} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';


function emailReducer(state, action){
  if(action.type === "INPUT_EMAIL"){
    return{
      emailValue: action.val,
      isValid: action.val.includes('@'),
    };
  }

  if(action.type === "INPUT_EMAIL_BLUR"){

    return{
      emailValue: state.emailValue,
      isValid:state.emailValue.includes('@')
    }
  }

  return state;

//   return{
//     emailValue: "",
// isValid: undefined,
//   }

}

const initialState ={
emailValue: "",
isValid: undefined,
}


function passwordReducer(state,action){
if(action.type === 'INPUT_PASSWORD'){
  return{
    passValue: action.valPass,
    passIsValid: action.valPass.trim().length > 6,
  }
}
if(action.type === 'INPUT_PASSWORD_BLUR'){
  return{
    passValue: state.passValue,
    passIsValid: state.passValue.trim().length > 6,
  }

  
}
return state;
}



const passwordInitialState={
  passValue: '',
  passIsValid: undefined,
}


const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();

const [emailState, dispatchEmail] = useReducer(emailReducer , initialState)
const [passwordState, dispatchPassword] = useReducer(passwordReducer, passwordInitialState)

  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // const {isValid:emailIsValid} = emailState
  const {passIsValid: passValidation} = passwordState

  useEffect(()=>{
    const timerId = setTimeout(()=>{  //debouncing- user type kilganda useEffect reaction kilbait. typing butkondo reaction bolot, 1,5 second berildi
      setFormIsValid(
     emailState.emailValue.includes('@') && passwordState.passValue.trim().length > 6 // validnost'tu tekweruu 
    );
    },1500)

    return()=>{
      clearTimeout(timerId) //ar bir najatie bolgondo useEffect kaytalanip iwtey berbewi uchun clean up function koldonuw kerek.
    };
    
  },[emailState.emailValue, passwordState.passValue]);

  const emailChangeHandler = (event) => {
    dispatchEmail({type: "INPUT_EMAIL", val: event.target.value})
    // setEnteredEmail(event.target.value);

    
  };
   
  const validateEmailHandler = () => {
    dispatchEmail({type: "INPUT_EMAIL_BLUR"})
    // setEmailIsValid(enteredEmail.includes('@'));
  };

  
  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'INPUT_PASSWORD', valPass: event.target.value})
    // setEnteredPassword(event.target.value);

  };

 

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'INPUT_PASSWORD_BLUR'})
    // setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.emailValue, passwordState.passValue);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.emailValue}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passValidation === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.passValue}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
