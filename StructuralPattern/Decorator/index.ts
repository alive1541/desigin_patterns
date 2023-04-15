import { Chicken, ColorfulChicken } from "./core";

const chicken = new Chicken("红色");
chicken.display(); // 这是一只红色头发的小鸡

const colorFulChicken = new ColorfulChicken(chicken);

colorFulChicken.display(); // 这是一只五颜六色头发的小鸡
