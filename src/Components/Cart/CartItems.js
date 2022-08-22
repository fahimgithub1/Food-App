import classes from './CartItems.module.css';

export default function CartItems({...props}){
    // const totalItem = props.item.length;

    return(
        <li className={classes.cartItemList}>
            <div className={classes.itemhistory}>
                <h2>{props.name}</h2>
                <span className={classes.price}>${props.price}</span>
                <span className={classes.quantity}>x 1</span>
                {/* <span></span> */}
            </div>

            <div>
                <button>-</button>
                <button>+</button>
            </div>
        </li>
    );
};