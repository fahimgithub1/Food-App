import Input from './Input';
import classes from './MeailItemFrom.module.css'

export default function MeailItemsFrom({...props}){

    return(
        <form className={classes.form}>
            <Input label="amount" 
                   input={{ id:"amount", 
                            type: "number",
                            min: '0',
                            max: '5',
                            step: '1',
                            defaultValue: '0',
                          }} 
            />

            <button>+add</button>
        </form>
    );
};