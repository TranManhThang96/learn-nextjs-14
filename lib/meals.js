import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
const db = sql('meals.db');

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare('SELECT * FROM meals').all();
}

export async function getMeal(slug) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare('SELECT * FROM meals where slug = ?').get(slug);
}

export function saveMeal(meal) {
  meal.slug = slugify(meal.title, { locale: true });
  meal.instructions = xss(meal.instructions);
}
