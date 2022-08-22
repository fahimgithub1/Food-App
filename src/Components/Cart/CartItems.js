import classes from './CartItems.module.css';

export default function CartItems({...props}){
    // const totalItem = props.item[props.itme.name].length;

    return(
        <li className={classes.cartItemList}>
            <div className={classes.itemhistory}>
                <h2>{props.name}</h2>
                <span className={classes.price}>${props.price}</span>
                <span className={classes.quantity}>x {props.amount}</span>
                {/* <span></span> */}
            </div>

            <div>
                <button onClick={props.onRemove}>-</button>
                <button onClick={props.onAdd}>+</button>
            </div>
        </li>
    );
};