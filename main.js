
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
// var groundBeef = new FoodItem('Ground Beef', 100, false, true);
// console.log(groundBeef.stringify());
// var tomato = new FoodItem('Tomato', 10, true, true);
// console.log(tomato.stringify());
// var cheese = new FoodItem('Cheese', 10, false, true);
// console.log(cheese.stringify());

// Burger Plate
var bun = new FoodItem('Bun', 10, true, false).stringify();
var lettuce = new FoodItem('Lettuce', 5, true, true).stringify();
var tomato = new FoodItem('Tomato', 10, true, true).stringify();
var burgerPatty = new FoodItem('Burger Patty', 100, false, true).stringify();
var cheese = new FoodItem('cheese', 10, false, true).stringify();
var bacon = new FoodItem('bacon', 50, false, true).stringify();
var fries = new FoodItem('Fries', 80, true, true).stringify();
//Salad Plate
var arugula = new FoodItem('arugula', 10, true, true).stringify();
var cukes = new FoodItem('Cucumbers', 10, true, true).stringify();
var crutons = new FoodItem('Crutons', 5, true, false).stringify();
var dressing = new FoodItem('Dressing', 20, true, true).stringify();



/* PLATE CONSTRUCTOR AND PROTOTYPE -------------------------------------*/

// PLATE CONSTRUCTOR
var Plate = function(name, descr, price, ingr) {
    this.name = name;
    this.descr = descr;
    this.price = price;
    this.ingr = ingr;
};

Plate.prototype.stringify = function (){
    return `-=-=-=-=-=-=-=-=-=-=-=-=
    ${this.name}: ${this.descr}. Price: ${this.price}. Ingredients Include: ${this.ingr}`;
};

var burgerPlate = new Plate('Plate1: BBQ Bacon Burger', 'YEHAW! Cowboy on up with our BBQ Bacon Burger', '$14.99', [bun, lettuce, tomato, burgerPatty, cheese, bacon, fries]).stringify();
// console.log(burgerPlate.stringify());
var saladPlate = new Plate('Plate2: House Salad', 'Small Bites, enjoy our house salad while waiting for your burger to cook!', '$2.99', [arugula, cukes, crutons, dressing]).stringify();
// console.log(saladPlate.stringify());

/* MENU CONSTRUCTOR AND PROTOTYPE -------------------------------------*/
var Menu = function (name, plates) {
    this.name = name;
    this.plates = plates;
};

Menu.prototype.stringify = function (){
    return `Our ${this.name} which features the following plates: ${this.plates}
    -=-=-=-=-=-=`;
};

var lunchMenu = new Menu('Lunch Menu', [burgerPlate, saladPlate]).stringify();
// console.log(lunchMenu);

/* RESTAURANT CONSTRUCTOR AND PROTOTYPE -------------------------------------*/
var Restaurant = function (name, descr, menu){
    this.name = name;
    this.descr = descr;
    this.menu = menu;
};

Restaurant.prototype.stringify = function (){
    return `Welcome to ${this.name}! ${this.descr}. Please take a look at ${this.menu}. We hope you'll join us soon!`
};

var restaurantName = new Restaurant('Alice And Bobs Burgers', 'Come on down to Alice and Bobs Burgers to satisfy all your burger cravings!', lunchMenu).stringify();

console.log(restaurantName);
