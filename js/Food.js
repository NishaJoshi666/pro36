class Food{
    constructor(){
        var foodStock
        var lastFed
    }
     
display(){
    var getFoodStock;
    var updateFoodStock;
    var deductFood;
    var feed = createButton("feed the dog");
     feed.position(700,95);
     feed.mousePressed(feedDog);

     var addFood = createButton("Add Food");
     addFood.position(800,95);
     addFood.mousePressed(addFoods);
}

}