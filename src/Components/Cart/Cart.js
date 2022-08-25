import React, { useContext, useState } from 'react';
import Modal from '../UI/Modal';
import classes from './Card.module.css';
import CartContext from '../../store/cart-contest';
import CartItems from './CartItems';
import Checkout from './Checkout';

export default function Cart({...props}){
    const cartCtx = useContext(CartContext);
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmiteding, setIsSubmiteding] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItem = cartCtx.items.length > 0;

    const cartItemAddHdler = (item) =>{
        cartCtx.addItem({...item, amount:1})
    }

    const cartItemRemoveHandler= (id) =>{
        cartCtx.removeItem(id);
    }

    const submitOrderHandler = async (userData) =>{
        setIsSubmiteding(true);
        await fetch(
            'https://food-app-project-1da52-default-rtdb.firebaseio.com./orders.json',{
                method: 'POST',
                body: JSON.stringify({ 
                userData,
                orderdITem: cartCtx.items
            })
        });
        
        setIsSubmiteding(false);
        setDidSubmit(true);
        cartCtx.clearCart();
    };

    const cartItems =(
        <ul className={classes.itemstyl}>
            {cartCtx.items.map((item)=>(
                <CartItems 
                            key={item.id} 
                            name={item.name} 
                            price ={item.price} 
                            amount={item.amount}
                            // length={itemLangth} 
                            onAdd={cartItemAddHdler.bind(null, item)} 
                            onRemove ={cartItemRemoveHandler.bind(null, item.id)}
                />
            ))}
        </ul>
    );

    const HandleChakeout = () =>{
        setIsCheckout(true);
    }

    const ModulAction = <div className={classes.action}>
                            <button className={classes['button--alt']} onClick={props.onHeide}>Close</button> {/*  clasName={classes['button--alt']}*/}
                            {hasItem && <button className={classes.button} onClick={HandleChakeout}>Order</button>} {/*  clasName={classes.button}*/}
                        </div>
    
    const CardModalContent = (
        <React.Fragment>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>

            {isCheckout &&<Checkout onHeide={props.onHeide} onConfirm={submitOrderHandler}/>}
            {!isCheckout && ModulAction}
        </React.Fragment>
    );

    return(
        <Modal onHeide={props.onHeide}>
            {!isSubmiteding && !didSubmit && CardModalContent}
            {isSubmiteding && <p> Submiting order! ....</p>}
            {!isSubmiteding  && didSubmit && <p>Sucessfuly Orderd</p>}
            
        </Modal>
    );
};