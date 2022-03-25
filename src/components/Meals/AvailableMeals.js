import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useCallback, useEffect, useState } from "react";

// const DUMMY_MEALS = [
//   {
//     id: 'm1',
//     name: 'Sushi',
//     description: 'Finest fish and veggies',
//     price: 22.99,
//   },
//   {
//     id: 'm2',
//     name: 'Schnitzel',
//     description: 'A german specialty!',
//     price: 16.5,
//   },
//   {
//     id: 'm3',
//     name: 'Barbecue Burger',
//     description: 'American, raw, meaty',
//     price: 12.99,
//   },
//   {
//     id: 'm4',
//     name: 'Green Bowl',
//     description: 'Healthy...and green...',
//     price: 18.99,
//   },
// ];

const AvailableMeals = () => {
	const [meals, setMeals] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchMealsHandler = useCallback(
		async () => {
			setIsLoading(true);
			setError(null);

			try {
				const response = await fetch("https://react-http-a7119-default-rtdb.firebaseio.com/FoodApp.json");
				if (!response.ok) {
					throw new Error("Something wen wrong with loading the meals");
				}

				const data = await response.json();
				const loadedMeals = [];
				for (const key in data) {
					if (Object.hasOwnProperty.call(data, key)) {
						const meal = data[key];
						loadedMeals.push(
							{
								id: key,
								...meal
							}
						)
						
					}
				}

				console.log(loadedMeals);

				setIsLoading(false);
				setMeals(loadedMeals);

			} catch (error) {
				setIsLoading(false);
				setError(error.message);
			}
		}, 
		[]
	);

	useEffect(() => {
		fetchMealsHandler();
	},[fetchMealsHandler]);

    const mealsList = meals.map((meal) => (
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

    return (
        <section className={classes.meals}>
            <Card>
                {!isLoading && !error && <ul>{mealsList}</ul>}
				{isLoading && !error && <p>Loading...</p>}
				{error && <p>{error.message}</p>}
            </Card>
        </section>
    );
};

export default AvailableMeals;
