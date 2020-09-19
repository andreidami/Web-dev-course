
const button= document.getElementById("btn")
button.addEventListener("click",change)


var clicks = 0;
function change() {
  clicks += 1;
   if(clicks==2)
  {message ="Click me again!";}
   else if(clicks >= 6)
  {button.style.visibility = "hidden";}
  
  else
    {message =  "Thank you, goodbye!";}
  document.getElementById("btn").innerHTML = message;

};
