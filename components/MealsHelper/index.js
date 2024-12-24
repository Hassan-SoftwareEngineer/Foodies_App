import { getMeals } from "@/lib/meals";
import MealsGrid from "../MealsGrid";
async function MealsHelper() {
    const meals = await getMeals();
    return <MealsGrid meals={meals} />
  }
export default MealsHelper;