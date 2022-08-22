import Modal from '../UI/Modal';
import classes from './Card.module.css';

export default function Cart({...props}){
    const cartItems =(
        <ul className={classes.itemstyl}>
            {[{id:'c1',name:'Sushi', amount: 2, price: 12.99}].map((item)=>
                (<li>{item.name}</li>)
            )}
        </ul>
    );

    return(
        <Modal onHeide={props.onHeide}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.action}>
                <button className={classes['button--alt']} onClick={props.onHeide}>Close</button> {/*  clasName={classes['button--alt']}*/}
                <button className={classes.button}>Order</button> {/*  clasName={classes.button}*/}
            </div>
        </Modal>
    );
};