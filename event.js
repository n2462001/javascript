let a=prompt("Enter the number a");
let b=prompt("Enter the number b");
alert('Click ok button for result');
 sum=a+b;

let btn=document.querySelector("#btn");

btn.onclick= () =>{
// console.log(sum);
document.write(sum);
}

// mousehover event
let mouse=document.querySelector("#mouse");
mouse.onmouseover =()=>{
    backgroundColor="yellow";
}
// evetnt listerner
btn.addEventListener("click",()=>{
    console.log("clicked");
})