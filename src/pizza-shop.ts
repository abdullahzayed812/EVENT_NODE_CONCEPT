import EventEmitter from "node:events";

export class PizzaShop extends EventEmitter {
  private orderNumber: number;

  constructor() {
    super();
    this.orderNumber = 0;
  }

  order(size: string, topping: string) {
    this.orderNumber++;

    this.emit("order", size, topping);
  }

  displayOrderNumber() {
    console.log(`Current order number is: ${this.orderNumber}`);
  }
}
