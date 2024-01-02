import MealItem, { IMealItemProps } from './MealItem';
import classes from './meals-grid.module.css';

export default function MealsGrid({ meals }: { meals: IMealItemProps[] }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal: IMealItemProps) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
