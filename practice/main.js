
//chicken Monkey//

for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        console.log("chickenmonkey")
    }
    else if (currentNumber % 5 === 0) {
        console.log("chicken")
    }
    if (currentNumber % 7 === 0) {
        console.log("monkey")
    }
    
    console.log(currentNumber);
}



//chicken_monkey//


//Take a Number - Battle of the Bands//

let bandNumber = 1

const takeNumber = function () {
    /*
        Write your awesome code here. See comments
        below for what should be returned.
    */
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // 





//////////cookout__practice////

const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

function grill (currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
};


for (let i = 0; i < foods.length; i++) {
    const food = foods[i];
    grill(food);

}
 console.log(cookedFood);

//cookout//


//lightning exercise//




let painter = {
    tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
    uniform: "white overalls",
    cost_per_hour: 25.00,
    insured: true,
        action: function () {
        alert("no mistakes, just happy"
    }


  }




 painter.tools.push("tape");
 console.log(tools)

  
 //an action that the painter can perform.
 // Have her take that action by execucting the method you created.
 // BONUS: Add a method that allows us to add new tools for the painter. //let painter = {
