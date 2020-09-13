var animal = {
    type: "squirrel",
    name: "alvin",
    gut: [ "berries", "flowers"],
    food: "nuts",

    eat: function() {
        return this.gut + " " + this.food;
    }
}
     console.log(animal.eat())
