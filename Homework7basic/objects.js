var animal = {
    type: "squirrel",
    name: "alvin",
    gut: [ "berries", "flowers"],
   

    eat: function(food) {

         this.gut.push(food)}
    }

     console.log("before:",animal.gut);
     animal.eat("nuts");
     console.log("full belly:",animal.gut);


