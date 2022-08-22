import classes from './HeaderCard.module.css';
import CartContext from '../../store/cart-contest';
import charicon from '../../assets/favorite-cart (1).png'
import { useContext } from 'react';

export default function HeaderCard({...props}){
    const cartCtx = useContext(CartContext);

    const numberofCartItem = cartCtx.items.reduce((curNumber, item)=>{
        return curNumber + item.amount;
    }, 0);

    return (
        <button className={classes.button} onClick={props.onClick}>

            {/* iCon  */}
            <span className={classes.icon}><img src={charicon} alt='char icon' /></span>

            <span>Your Cart</span>

            {/* total item choice */}
            <span className={classes.badge}>{numberofCartItem}</span>

        </button>
    );
}