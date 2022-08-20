import classes from './MaalSummary.module.css'


const MealSummary = () =>{

    return(
        <section className={classes.summary}>
            <h1>Delicious Food, Delivered To You</h1>
            <p>
                Choose you favorite meal from our broad selection of available meals 
                and enjoy a delicious lunch or dinner at home.
            </p>
            <p>
                All our meals are cooked with heigh-quality ingredientd, just-in-tiime andof course 
                by experienced chefs!
            </p>

        </section>
    );
}

export default MealSummary;