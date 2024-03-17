 // synchronous programming

// const { log } = require("async");

//  console.log("one");   // sequence by execute
//  console.log("two");
//  console.log("three");
//  console.log("four");


//  function hello(){
//     console.log("hello");
//  }

 // in arrow function(
    // hii=()=>{
    //     console.log("hello");
    // }

    // setTimeout(hello, 4000)  // time in given ms 1s= 1000ms

    // setTimeout(    
    //     ()=>{      
    //         console.log("hii");
    //     },5000
    // );

    // console.log("five"); // this code not wait for exeution settime fun it knows the delay in time.it execute the set time fun parallel

    // call back is a function passed as an argument in another function

//     function sum(a,b){
//         console.log(a+b);

//     }
    
//    calculate= (a,b,sumCallback)=>{
// sumCallback(a,b);
//     }


//     calculate(1.2,sum);


// promises  

// let promises=new Promise((resolve, reject) => {
//     console.log("promise");
//     resolve("sucees");

//      // reject("error")
// })


// resolve is a functtion created by jses when promise can fullfiled

// let promis=new Promise((resolve, reject) => {
//     console.log("promise");
//     reject("failure");
// })


// const getpromise=()=>{
//   return  new Promise((resolve, reject) => {
//         console.log("U m promise");
//         resolve("success")
//     })
// }

// let promise=getpromise()  // wledhen fullfiled
// promise.then(()=>{
//     console.log("fullfiled");
// }
// )


// when reject

// promise.catch(()=>{
//     console.log("fullfiled");
// })


// a Sync amd await

 function api(){
  return promise= new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log(200)
       },3000);
  });
 }



async function getwheatherdata(){
    await api()
}
getwheatherdata();