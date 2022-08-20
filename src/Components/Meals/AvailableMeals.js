import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MeailItems from './MeailItem/MaailItem';

const dumy_Meals = [
    {
        id: 'm1',
        name: 'Sushi',
        desciption: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        desciption: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Sushi',
        desciption: 'Finest fish and veggies',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        desciption: 'Healthy.... abd green....',
        price: 18.99,
    }
]


const AvailableMeals = () =>{
    const mealsList = dumy_Meals.map(meal => <MeailItems 
                                                    name={meal.name} 
                                                    price={meal.price}
                                                    desciption={meal.desciption}
                                              />)


    return(
        <section className={classes.meals}> 
            <Card>
            <ul>
                {mealsList}
            </ul>
            </Card>
        </section>
    );
}

export default AvailableMeals;