let btn =document.createElement("Button");
btn.innerText="Click me";
// document.dir(btn);


btn.style.backgroundColor="red";
btn.style.color="white";

// let div=document.getElementsByName("div");
// 
document.querySelector("body").prepend(btn);


// add new class 
 let p=document.querySelector("p");
p.classList.add("newclass"); 