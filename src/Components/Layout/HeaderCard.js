import classes from './HeaderCard.module.css';

import charicon from '../../assets/favorite-cart (1).png'

export default function HeaderCard({...props}){

    return (
        <button className={classes.button}>

            {/* iCon  */}
            <span className={classes.icon}><img src={charicon} alt='char icon' /></span>

            <span>Your Cart</span>

            {/* total item choice */}
            <span className={classes.badge}>3</span>

        </button>
    );
}