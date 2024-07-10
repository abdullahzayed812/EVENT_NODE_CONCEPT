import { PizzaShop } from "./pizza-shop";
import { DrinkMachine } from "./drink-machine";

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size: string, topping: string) => {
  console.log(`Order receive! bake ${size} pizza with ${topping}`);

  drinkMachine.serveDrink(size);
});

pizzaShop.order("large", "mushroom");
pizzaShop.displayOrderNumber();
