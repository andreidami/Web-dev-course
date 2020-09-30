var numbers = [1, 2, 3, 4, 5,];


 var reverseNumbers = numbers.reduce((other,items) => {
     other.unshift(items);
     return other;
 } ,[])
      
      console.log(reverseNumbers);