
const button= document.getElementById("btn");



var clicks = 0;
function change() {
  clicks += 1;
   if(clicks===1)
  {message ="Click me again!";}
   else if(clicks===2)
   {message =  "Thank you, goodbye!";}
  
  else
  {button.style.visibility = "hidden";}
  document.getElementById("btn").innerHTML = message
};



