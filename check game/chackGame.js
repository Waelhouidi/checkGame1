const input=document.querySelector("input"),guess=document.querySelector(".hayt"),rechances=document.querySelector(".chance"),checkButton=document.querySelector("button");

input.focus();
let randomNumber=(Math.floor (Math.random()*100+1))
chance=10;
// //for tsting program {
// // console.log(randomNumber)
// }


checkButton.addEventListener("click",()=>{
    chance--;
   
 //get the value from  the input of gamer 
 let inputValue=input.value;
 //update guess number , disable the input , check button text and color
 if(randomNumber==inputValue){
    [guess.textContent,input.disabled]=["Congratulation",true];
    [checkButton.textContent, guess.style.color]=["Rplay","Red"]
 }
 //chech if the input > 100 
else if(inputValue>randomNumber && inputValue<100){
    [guess.textContent,rechances.textContent]=["Your Number is hight",chance]
 }
 else if(inputValue<randomNumber && inputValue>0){
    [guess.textContent,rechances.textContent]=["Your Number is low",chance]
 }else{
    [guess.textContent,rechances.textContent]=["Your Number is invalid",chance];
    guess.style.color="#DE0611"
 }
//if input empty
if(inputValue==""){
    [guess.textContent,rechances.textContent]=["You should to make a number",chance];
    guess.style.color="#DE0611";
 }

//check if chance is zaro 
if(chance==0){
  [guess.textContent,checkButton.textContent,input.disabled,inputValue]=["You lost the game ","Replay",true,""]
  guess.style.color="#DE0611";
}
if(chance<0){
    window.location.reload();
}
})