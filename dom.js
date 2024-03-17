let hii=document.getElementById("heading");
console.dir(hii)

let hello=document.getElementsByClassName("hello")
console.dir(hello)

let h3=document.querySelector("h3")

console.dir(h3.innerText)   // java s icript

// to add from apna college

h3.innerText=h3.innerText+" from apna college";

// fetch attribute
// let value=div.getAttribute("id");
// console.log(value);

// to inser element

// create element
let el=document.createElement("button");
el.innerText="Click!"
console.log(el);

let div=document.querySelector("div");
div.append(el);

let news=document.createElement("heading");
news.innerText="hello everyone";
console.log(news)

document.querySelector("body").after(news);

let new_btn=document.createElement("button");
new_btn=innerText="click me!";
new_btn.style.color="white";
new_btn.style.backgroundColor="red";
document.querySelector("body").prepend(new_btn);

