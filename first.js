 const product={
 
    Name: "Parker",
    price:250,
    rating:4,

};
// console.log(product);

const profile={
    username:"Nitesh",
    post:195,
    followers:1100,
    following:4,
    bio:"Entrepenure"
}
// document.write(profile);
// console.log(profile);


//******************************************************* */


//  let n=prompt("Enter the number");
//  if(n%5==0){
    
//     // console.log("Number is Multiple of 5");
//     alert('Number is Multiple of 5');
//  }
//  else{
//     // console.log("Number is not  Multiple of 5");
// alert('Number is Not Multiple of 5') 
// }


//******************************************************************** */

//----------*************************-----------------------***//

// let grade=prompt("Enter the Grade");


// if(grade>=90 && grade<=100){
//     alert('You have A Grade');
// }
// else if( grade>=70 && grade<=89){
//     alert('You have B Grade');
// }
// else if(grade>=60 && grade<=69){
//     alert('You have C Grade');
// }
// else if(grade>=50 && grade<=59){
//     alert('You have D Grade');
// }
// else{
//     alert('You have F Grade');
// }


//************************************************************************************* */

/*
for loop
Write a program to print the event number 1 to 100
*/


// for(let num=0;num<=100;num++){
//     if(num%2==0){
//         console.log(n);
//     }
// }

//************************************************************ */

//Write a program to the sum of n number

let n=prompt("Enter the Number");
let sum=0;
for(let i=1;i<=n;i++){
    sum=sum+i;
    console.log(sum);
}
  

//******************************************** */
let heading=document.getElementsByTagName("h1");
heading.innertext=heading.innertext + "Apna College";

//********************************************************** */

// let divs=document.querySelectorAll(".box");
 
// for(div of divs){
    
// }
// divs[1].innertext("hello");

//****************************** */

let div=document.querySelector("div");
div.style.backgroundColor="yellow";
div.innerText=sum;


new btn=document.createElement("Button");
