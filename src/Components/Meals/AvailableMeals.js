import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MeailItems from './MeailItem/MaailItem';

// const dumy_Meals = [
//     {
//         id: 'm1',
//         name: 'Sushi',
//         desciption: 'Finest fish and veggies',
//         price: 22.99,
//     },
//     {
//         id: 'm2',
//         name: 'Schnitzel',
//         desciption: 'A german specialty!',
//         price: 16.5,
//     },
//     {
//         id: 'm3',
//         name: 'Sushi',
//         desciption: 'Finest fish and veggies',
//         price: 12.99,
//     },
//     {
//         id: 'm4',
//         name: 'Green Bowl',
//         desciption: 'Healthy.... abd green....',
//         price: 18.99,
//     }
// ]


const AvailableMeals = () =>{
    const [dumy_Meals, setDumy_Meals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(()=>{

        const fetchdata = async() => {
            try{
                const response = await fetch(
                    'https://food-app-project-1da52-default-rtdb.firebaseio.com./Meals.json'
                );
    
                const data = await response.json();
    
                let loadMeals = [];
    
                for(const key in data){
                    loadMeals.push({ 
                                        id: key, 
                                        name: data[key].name,  
                                        price: data[key].price,
                                        description: data[key].description
                                    });
                }
    
                setDumy_Meals(loadMeals);
            }catch(e){
    
            }
 
            setIsLoading(false);
        };

        fetchdata();
    }, []);

    const mealsList = dumy_Meals.map(meal => <MeailItems
                                                    key={meal.id}
                                                    id={meal.id}
                                                    name={meal.name}
                                                    description={meal.description}
                                                    price={meal.price}
                                              />)

    const mealsDesign = !isLoading ? classes.meals : classes.mealslided;

    return(
        <section className={mealsDesign}> 
            <Card>
                <ul>
                    {mealsList}
                    {isLoading && <h4 className={classes.isLoading}>Data Loading.... </h4>}
                </ul>
            </Card>
        </section>
    );
}

export default AvailableMeals;