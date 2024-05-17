let result = document.querySelector(".result")
let inc = document.querySelector(".inc")
let dec = document.querySelector(".dec")

let a = 0;
inc.addEventListener('click' , function(){
   if(a===10){
    alert('not found');
   }
   else{
    a++
   result.innerHTML = a;
   }
});
dec.addEventListener('click' , function(){
    
    if(a===0){
        alert('not found');
       }
       else{
        a--
       result.innerHTML = a;
       }
 });