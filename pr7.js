let btnn=document.querySelector("#btnn");
let body=document.querySelector("body");
let currMode="light";

btnn.addEventListener("click",()=>{

    if(currMode=="light"){
       
        currMode="dark";
        body.style.backgroundColor="black";

        // another way using css
        // body.classList.add("dark");

    }else{
        // console.log("light");
        currMode="light";
        body.style.backgroundColor="white";
    }
    console.log(currMode);
}
)