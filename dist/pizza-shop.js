"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzaShop = void 0;
const node_events_1 = __importDefault(require("node:events"));
class PizzaShop extends node_events_1.default {
    constructor() {
        super();
        this.orderNumber = 0;
    }
    order(size, topping) {
        this.orderNumber++;
        this.emit("order", size, topping);
    }
    displayOrderNumber() {
        console.log(`Current order number is: ${this.orderNumber}`);
    }
}
exports.PizzaShop = PizzaShop;
