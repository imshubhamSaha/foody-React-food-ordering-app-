import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Dosa",
    type: "veg",
    cuisine: "South-Indian",
    availability: "Breakfast, lunch",
    price: 99,
  },
  {
    id: "m2",
    name: "Chappathi",
    type: "veg",
    cuisine: "North-Indian",
    availability: "Breakfast, lunch, dinner",
    price: 7,
  },
  {
    id: "m3",
    name: "Chicken",
    type: "non-veg",
    cuisine: " South-Indian",
    availability: "Breakfast, lunch, dinner",
    price: 249,
  },
  {
    id: "m4",
    name: "Mutton Kassa",
    type: "non-veg",
    cuisine: "Authenticated-Bengali",
    availability: "Breakfast, lunch, dinner",
    price: 699,
  },
];

const AvailableMeals = () => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              type={meal.type}
              cuisine={meal.cuisine}
              available={meal.availability}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
