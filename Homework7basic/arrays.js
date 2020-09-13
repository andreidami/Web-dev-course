function sumPozitive(numbers) { 
    var positiveArray = numbers.filter(function(numbers) {
      return numbers > 0 });
      var sum = 0; positiveArray.forEach(function(numbers) {sum += numbers;});
      return sum;
  }
  var numbers = [-2, 10, 2, 4, -6, 3];
 
     
console.log(sumPozitive(numbers));

