import classes from './MasilItem.module.css'
import MeailItemsFrom from './MeailItemFrom';

export default function MeailItems({...props}){

    return(
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.desciption}>{props.desciption}</div>
                <div className={classes.price}>${props.price.toFixed(2)}</div>
            </div>

            <div>
                <MeailItemsFrom />
            </div>
        </li>
    );
};