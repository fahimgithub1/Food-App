import classes from './Modal.module.css';
import {Fragment} from 'react';
import ReactDOM from 'react-dom';

function Backdrop({...props}){

    return <div className={classes.backdrop} onClick={props.onHeide}/>
};

function ModalOverlay({...props}){

    return(
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};


const portalElement = document.getElementById('overlays');

export default function Modal({...props}){

    return(
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onHeide={props.onHeide}/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    );
};