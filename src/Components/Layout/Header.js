import {Fragment} from 'react';
import classes from './Header.module.css'
import mealsImage from '../../assets/food cover heros.webp';
import HeaderCard from './HeaderCard';

export default function Header({...props}){

    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCard onClick={props.onShowcart} />
            </header>

            <div className={classes['main-image']}>
                 <img src={mealsImage} alt='a tavle full of food'/>
            </div>
        </Fragment>
    );
}