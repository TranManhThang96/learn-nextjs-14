import MealItem, { IMealItem } from './MealItem';
import classes from './meals-grid.module.css';

export default function MealsGrid({ meals }: { meals: IMealItem[] }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal: IMealItem) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
