console.log("object.js");

const cupcake = {
    color : ["pink", "white", "brown"],
    flavor : "chocolate",
    size : "mini",
    calories : 0,
    icing : true,
    eatCupcake: () => {
        console.log("yum");
    }
}

console.log("cupcake", cupcake);

console.log("what color do we have", cupcake.color);

for (let i  = 0; i < cupcake.color.length; i++) {
    console.log("cupcake colors", cupcake.color[i]);
}

cupcake.color.forEach(color => {
console.log("what is color", color);
console.log("and this is the long way to get " + color + " and some more");
console.log('the color again is ${color} and that is a beautiful color');
})





const car = {
    color : "red",
    year : "2015",
    model : "mustang",
}

console.log("car",car);

var familymembers = [
    dad = {
        name: "jack",
        age: 30,
        food: "pizza"
    }
]
console.log("dad",dad);
 
const familymembers1 = {
    name: ["bob","boo","besty",],
    hobbies: ["baseball","ball", "kingball,"],
    isCool: [false, true, true ]
}
 console.log("familymembers1", familymembers1);

 
const myfamily = [
    {
        name:"jimmy",
        age: 5
    },
    {
        name:"bell",
        age: 10
    }
];
console.log("myfamily", myfamily);

