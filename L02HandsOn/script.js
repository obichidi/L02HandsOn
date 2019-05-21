let idealCar = {

name :"mustang",
color: "red",
weightInPounds: "3600",

myCar: function(){
 console.log ("My ideal car is a" + this.name +"with the color of" + this.color +", but I don't wnt it to be over" + this.weightInPounds +"pounds.");
}
};
idealCar.myCar();