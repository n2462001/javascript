
/******************************************************************* */

/*

let gamenumber='25';
let usernumber=prompt("Enter the number");

// if(num==n){
//     console.log("Congratulation you have enter correct number");
// }
// else{
//    num= prompt("Enter the number Agin");
// }

while(usernumber !== gamenumber)
{
   usernumber=prompt("Enter the number Again");
}
console.log("Congratulation you have enter correct number");


*/



/********************************************************************* */


//************************************************ */

// let fullname=prompt("Enter Your Fullname ");
// let username="@"+fullname + fullname.length;

// alert(username);



//********************************************************************* */

// write a program to calculate the avergae of marks

let marks=[45,57,55,78,65,78,52];
let sum=0;

for(let i=0;i<marks.length;i++){
   sum=sum+marks[i];
   // alert(sum);
}
let avg=sum/marks.length;
console.log("the marks of class",avg);

//************************************************ */

/* for a given array with price of 5 items [].all
item hava an offer 10% off on them .change the final arry to dtore the final price
*/


let price=[250,645,300,900,50];
let offer;

let discount=0;
for(let i=0;i<price.length;i++){
 offer=price[i]/10;
  price[i]=price[i]-offer;

}

console.log("After offer",price);


//****************** */


let companies=["Bloomberg","Microsoft","uber","Google","IBM","Netflix"];
console.log(companies);

//remove first company
// companies.splice(1,1);
companies.splice(0,1);
console.log(companies);

companies.splice(2,2,"ola")
console.log(companies);

companies.push("Amazon");
console.log(companies);

//************************************************************************************** */

/* Create a function using the function keyword that takes a dtring as an argument &
returns the number of vowels in the string
*/

function countvowels(str){
   //Nitesh
let count = 0;

for(let i=0;i<str.length;i++){
   if(
      str[i]=="a" ||
      str[i]=="e"||
      str[i]=="i"||
      str[i]=="o"||
      str[i]=="u"
   ){
count ++;
   }
}
console.log(count);
}



 let s = prompt("Enter the String ");
 let b=countvowels(s);
 console.log(b);
