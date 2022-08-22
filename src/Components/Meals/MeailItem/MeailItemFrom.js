import { useRef, useState } from 'react';
import Input from './Input';
import classes from './MeailItemFrom.module.css'

export default function MeailItemsFrom({...props}){
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
    
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        console.log("this is submitHandler");
        if (
          enteredAmount.trim().length === 0 ||
          enteredAmountNumber < 1 ||
          enteredAmountNumber > 5
        ) {
          setAmountIsValid(false);
          return;
        }
    
        props.onAddToCart(enteredAmountNumber);
    };

    return(
        <form className={classes.form} onSubmit2={submitHandler}>
            <Input 
                   ref={amountInputRef}
                   onSubmit2={submitHandler}
                   label='Amount'
                   input={{
                     id: 'amount_' + props.id,
                     type: 'number',
                     min: '1',
                     max: '5',
                     step: '1',
                     defaultValue: '1',}}
            />

            <button>+add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
        </form>
    );
};