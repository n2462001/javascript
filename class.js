class MarutiCar{

    start(){
document.write("start")
    }
stop(){
    document.write("stop")
}
    setBrand(brand){
this.brand=brand;
    }
}

let breeza=new MarutiCar();  // this is used to converted the class in object
breeza.setBrand("Breeza")
breeza.start()
breeza.stop()
// document.write(breeza)

let Swift=new MarutiCar();
breeza.setBrand("Swift")
// document.write(breeza)


let Alto=new MarutiCar();
breeza.setBrand("Alto")
Alto.start()
// document.write(Alto)


// inheritance
 class person{
    constructor(){

        this.species="hello";
    }
    sleep(){
        console.log("sleep")

    }
    eat=()=>{
        console.log("eat")
    }
 }
 
//  class Engineer       if we want inheritan person class we use extend keyword
 
 class Engineer extends person
 {
constructor(branch){

    super();  // to invoke the parent constructor
    this.branch=branch;
}

    work=()=>{
        console.log("work to solve problem")
    }
 }

 let NiteshObj=new Engineer();
//  Engineer.work()
//  Engineer.sleep()
//  Engineer.eat()


 // practice

 class user{
    constructor(name,email){
        this.name=name;
        this.email=email;

    }
    ViewData=()=>{
        console.log("view Data")
    }
 }


 class Admin extends user{

    constructor(name,email){

super(name,email)

    }
    Editdata=()=>{
Data="Some new value"
    }
 }
 // crate user for obj

 
 let Student1=new user("Nitesh","abc@gmail.com")
 Student1.ViewData()
 
 let Student2=new user("Aryan ","qqwer@gmail.com")
 Student2.ViewData()

 let admin1=new Admin("admin","admin@gmail.com")
 admin1.ViewData()


 // Error handling

 let a=10;
 let b=15;
 console.log("a=",a);
 console.log("b=",b);

 console.log("a+b",a+b)
 console.log("a+b",a+b)
 //we know that error in this line bec we not declare c then we write this try block
try{
    console.log("a+b",a+b)
}
catch(err){
    console.log(err);
}
 console.log("a+b",a+c)  
 console.log("a+b",a+b)
 console.log("a+b",a+b)