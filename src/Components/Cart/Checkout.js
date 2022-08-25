import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const isEmpty = (e) => e.trim() === '';
const HaveFiveChars = (e) => e.trim().length === 5;

const Checkout = ({...props}) =>{
    const [formInputValid, setFormInputValid] = useState({
        name: true,
        state: true,
        City: true,
        postalcode:true
    });

    const inputName = useRef('');
    const inputState = useRef('');
    const inputPostal = useRef('');
    const inputCity = useRef('');

    const confrimHamdler = (e) =>{
        e.preventDefault();

        const Name = inputName.current.value;
        const State = inputState.current.value;
        const Postal = inputPostal.current.value;
        const City = inputCity.current.value;

        console.log(Name + '  ' + State + '  ' + Postal + '  ' + City);

        const isNameValid = !isEmpty(Name);
        const isStateValid = !isEmpty(State);
        const isPostaValid = !HaveFiveChars(Postal);
        const isCityValid = !isEmpty(City);
        
        setFormInputValid({
            name:isNameValid,
            state: isStateValid,
            postalcode:isPostaValid,
            City : isCityValid
        });

        const formIsValid = isNameValid && isStateValid && isPostaValid && isCityValid;


        if(!formIsValid){
            return;
        }
        
        props.onConfirm({
            Name : Name,
            State : State,
            Postal : Postal,
            City : City
        });
    };


    return (
        <form onSubmit={confrimHamdler} className={classes.form}>
            <div className={classes.formControl}>
                <label htmlFor='name'>Your Name</label>
                <input ref={inputName} type='text' id='name' />
                {!formInputValid.name && <p>Input valid name</p>}
            </div>

            <div className={classes.formControl}>
                <label htmlFor='street'>Street</label>
                <input ref={inputState} type='text' id='street'/>
                {!formInputValid.state && <p>Input valid State</p>}
            </div>

            <div className={classes.formControl}>
                <label htmlFor='postal'>Postal Code</label>
                <input ref={inputPostal} className={classes.input} type='text' id='postal' />
                {!formInputValid.Postal && <p>Input valid Postal code</p>}
            </div>

            <div className={classes.formControl}>
                <label htmlFor='city'>City</label>
                <input ref={inputCity} type='text' id='city' />
                {!formInputValid.City && <p>Input valid City</p>}
            </div>

            <button className={classes.Chakbutton} onClick={props.onHeide}>Cencel</button>
            <button type='submit' className={classes.Chaksubbtn}>Confirm</button>
        </form>
    );
};

export default Checkout;