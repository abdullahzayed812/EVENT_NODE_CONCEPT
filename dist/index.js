"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pizza_shop_1 = require("./pizza-shop");
const drink_machine_1 = require("./drink-machine");
const pizzaShop = new pizza_shop_1.PizzaShop();
const drinkMachine = new drink_machine_1.DrinkMachine();
pizzaShop.on("order", (size, topping) => {
    console.log(`Order receive! bake ${size} pizza with ${topping}`);
    drinkMachine.serveDrink(size);
});
pizzaShop.order("large", "mushroom");
pizzaShop.displayOrderNumber();
