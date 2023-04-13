var screen1 = document.getElementById('first-screen');
var screen2 = document.getElementById('second-screen');
var allClear = document.getElementById('clear');
var del = document.getElementById('del');
var equals = document.getElementById('equals');
var numbers = document.querySelectorAll('[data-num]');

numbers.forEach(function(number){
    
 number.onclick=function(){
  // if (screen2.innerHTML =="") { 
  if (screen1.innerHTML=="" && number.innerHTML=="." ) {
   return 
  } else if (number.innerHTML=='.' && screen1.innerHTML.endsWith('.')) {
    return
  } else screen1.innerHTML+=number.innerHTML;
  
//  }

  
  // if (screen2.innerHTML!="") {
  //  if (screen1.innerHTML=="" && number.innerHTML=="." ) {
  //     return 
  //   } else if (number.innerHTML=='.' && screen1.innerHTML.endsWith('.')) {
  //      return
  //   } else 

  //   screen1.innerHTML+=screen2.innerHTML;
  // }
}
  
});


equals.onclick=function(){

var ans= eval(screen1.innerHTML);
screen2.innerHTML=ans;
};

del.onclick=function(){
  var sl= screen1.innerHTML.slice(0,-1);
  screen1.innerHTML=sl;
};

allClear.onclick=function(){
screen1.innerHTML="";
screen2.innerHTML="";
;}

