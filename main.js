
/* FOOD CONSTRUCTOR AND PROTOTYPE -------------------------------------*/

// FOOD ITEM CONSTRUCTOR
var FoodItem = function (name, calories, vegan, glutenFree) {
    this.name = name;
    this.calories = calories;
    this.vegan = vegan;
    this.glutenFree = glutenFree;
};

// FOOD ITEM PROTOTYPE
FoodItem.prototype.stringify = function (){
    if (this.vegan === true & this.glutenFree === true) {
        return `${this.name} has ${this.calories} calories, IS vegan and gluten free`;
    } else if (this.vegan === false && this.glutenFree === false) {
        return `${this.name} has ${this.calories} calroies, is NOT vegan, and is NOT gluten free`;
    } else if (this.vegan === true && this.glutenFree === false) {
        return `${this.name} has ${this.calories} calroies, IS vegan, but NOT gluten free`;
    } else if (this.vegan === false && this.glutenFree === true) {
        return `${this.name} has ${this.calories} calroies, is NOT vegan, but IS gluten free`;
    }
};

// THREE FOOD ITEMS (STRINGIFIED)
var groundBeef = new FoodItem('Ground Beef', 100, false, true);
console.log(groundBeef.stringify());
var tomato = new FoodItem('Tomato', 10, true, true);
console.log(tomato.stringify());
var cheese = new FoodItem('Cheese', 10, false, true);
console.log(cheese.stringify());

/* PLATE CONSTRUCTOR AND PROTOTYPE -------------------------------------*/

// PLATE CONSTRUCTOR
var Plate = function(name, descr, price, ingr) {
    this.name = name;
    this.descr = descr;
    this.price = price;
    this.ingr = ingr;
};

/* MENU CONSTRUCTOR AND PROTOTYPE -------------------------------------*/
var Menu = function (name, [plates]) {
    this.name = name;
    this.plates = plates;
};

/* RESTAURANT CONSTRUCTOR AND PROTOTYPE -------------------------------------*/
var Restaurant = function (name, descr, menu){
    this.name = name;
    this.descr = descr;
    this.menu = menu;
};
