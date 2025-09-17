/*console.log("hello world");

name="tirth rana";
console.log(name);

{
age=20;
console.log(age);
}



let Fname="tirth";
console.log(Fname);

var surname="rana";
console.log(surname)

{
const age=23;
console.log(age)
}

const student={
    name : "tirth rana",
    age:20,
    cgpa:9.5,
};

//practice Q1
const product={
   color:"black",
    price:270,
    discount:"5%",
}

//practice Q2
const profile={
    name:"tirth rana",
    posts:195,
    followers:'567k',
    following:4,
    profession:'Entrepreneur',
    isfollow:true,
}

*/
//oprators
/*let a=5;
let b=10;
console.log("original value of a and b is",a,b);
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a / b);

b%a;
console.log("a%b=",b%a);
a++;
console.log("a++",a);
a--;
console.log("a--",a);

if(a>b)
{
        console.log("a is greater than b ");

}else{
        console.log("b is greater than a")
}
 
//for loop
let i;
for(i=1;i<=10;i++)
{
        console.log(i);
}

//marks 

let t=18;
if(t>=19)
{
    console.log("you are eligible to vote");
}else{
    console.log("you are not eleigible to vote");
}


let x=10;
let y=20;
let z=30;

if(x>y && x>z)
{
    console.log("x is greater than y and z");
}else if(y>z && y>z)
{
    console.log("y is greater than x and z");
}else if(z>x && z>y)
{
    console.log("z is greater than x and y");
}else{
    console.log("xyz are equal")
}
 
//pratice Q2
/*user input
let num=prompt("enter a number:");

if(num%5===0)
{
        console.log(num,"is multiple of 5");
}else{
        console.log(num,"is not a multiple of 5");
}

//switch

//loops
let sum=0;
for(let i=1;i<=5;i++)
{
        sum=sum+i;
}
console.log("sum=",sum);

//for of loop
let str="Tirth";
for(let i of str){
    console.log(i);
}
*/
/*for in loop
let karigar = {
    name:"tirth",
    age:20,
    cgpa:7.2,
    college: "svit",
};

for(let i in karigar)
{
        console.log(i,karigar[i]);
}



for(let i=1;i<=100;i++)
{
        if(i%2==0){
                console.log("even numbers",i);
        }
}

/*let n=25;
let i=prompt("Guess the game number:");

 while(i!=n){
     i=prompt("you enetered wrong number,Guess again");
}
console.log("congrats,you entered the right number");
*/

//Q3
 /*let fullname=prompt("Enter fullname:");
 let username;
 username="@"+fullname+fullname.length;
 console.log(username);
*/

 /*Arrays
 let A=[1,2,3,4,5];
 console.log(A);
 console.log(A.length);
 console.log(A[1]);

  
let B=[1,2,3,4,5];
for(let i=0;i<=B.length;i++)
{
        console.log(i);
}

let marks=[85,97,44,37,76,60];
let avg=0,sum=0;
for(let value of marks)
{
        sum=sum+value;
}
        console.log(sum);
 avg=sum/marks.length;
console.log(avg);
*/
/*
let item=[250,645,300,900,50];
let offer=0,final=0;
for(let price of item)
{
    offer=((price/100)*10);
    final=price-offer;
    console.log(final);
}



/*
//Array Methods
let A=[1,2,3,4,];
console.log(A);
A.push(7);
console.log(A);
A.pop();
console.log(A);

//Array Concat()
let C=['Tirth','parthiv','dhruv'];
let D=['divy','dev','akshar'];


console.log(C);
console.log(D);
let friends=C.concat(D);
console.log(friends);




*/
/*
let companies=['Bloomberg','Microsoft','uber','google'];
companies.shift();
companies.splice(2,1,'ola');
companies.push(amazon);
*/




//funtions
/*function student(){
        console.log("TIRTH");
        console.log("rana");
}
student();
*/


/*
function ADD(){
    let a=5,b=10;
    console.log("ADDITION=",(a+b));
}  
ADD();*/




/*//function parameter
function message(msg){
    console.log(msg);
}
message('Tirth');
*/




//swapping 2numbers using function
/*
function swap(x,y){
    console.log("x=",x,"y=",y);
    let z=x;
    x=y;
    y=z;
    console.log("x=",x,"y=",y);
}
swap(5,10);
*/




/*function countvowels(str){
    let count=0;
    for (const char of str ){
      
        if(char=="a" || char=="e" || char=="i" || char=="o" || char=="u"){
            count++;
            
        }
    }
    console.log(count);
}
*/



/*
const countvow=(str)=>
{
     let count=0;
    for (const char of str)
    {
      
        if(char=="a" || char=="e" || char=="i" || char=="o" || char=="u")
        {
            count++;
        }
    }
    return count;
}*/




//square of number using foreach loop
/*let nums=[2,5,6,3,];
nums.forEach((num)=>{,,
    console.log(num*num);
});
 */   




/*
//filter array method
let fact=[3,4,5,6];

let newfact=fact.filter((val)=>{
    console.log(val*2===0);
});
console.log(newfact);
 */




//reduce array method
/*
let arr=[1,2,3,4];
const output=arr.reduce((result,current)=>{
    return result + current;
});
console.log(output);
*/

/*
//check which student got marks greater then 90
let students=[70,80,90,100];
let marks=students.filter((val)=>
{
        return val>90;
});
console.log(marks);
*/




/*
//sum and product of array elements using array methods
let n=prompt("Enter number of array elements");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);

let newarr=arr.reduce((result,current)=>
{
    return result+current;
     
});
console.log("sum=",newarr);

let factorial=arr.reduce((result,current)=>
{
        return result*current;
});
console.log("product=",factorial);
*/





//DOM-document object model

//selecting with ID
/*let head=document.getElementById("heading");
console.dir(head);*/

//selecting with class
/*let head1=document.getElementById("heading1-class");
console.dir(head1);*/

//selecting with tags
/*let para=document.getElementsByTagName("p");
console.dir(para);*/

//Query selector 
/*let elements=document.querySelector("p");//1st element
console.dir(elements);

let all=document.querySelectorAll('p');// all  element
console.dir(all);*/



//DOM manipulation properties
//innertext,innerHTML,textcontent
//let div=document.querySelector("div");
//console.dir(div);


//practice Q
/*let str1="hello javascript";
let str2=" from apna college";
console.log(str1);
console.log(str2);
let add=str1.concat(str2);
console.log(add);*/
//
/*let h2=document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText=h2.innerText  +  " from apna college";*/



//pratice Q
//let div1=document.getElementsByClassName("box");
//console.dir(div1[0]);


//Attributes
/*let div=document.querySelector("div");
console.dir(div);
let id=div.getAttribute("class");
console.log(id);*/

//style attribute
/*let div=document.querySelector("div");
console.log(div);
div.style.backgroundColor="orange";*/

//insert elements
/*let newbtn=document.createElement("button");
newbtn.innnerText='click me';
console.log(newbtn);

//insert/append button at the end
  let div=document.querySelector("div");
div.append(newbtn);

//inert/append button at the start
let div=document.querySelector("div");
div.prepend(newbtn);*/

//class list  




//EVENTS handling in JS
/*let btn=document.querySelector("btn");
btn.onlick=(evt)=> {
    console.log("btn1 was clicked");
    console.log(evt.clientX,evt.clientY);
};*/

/*let box=document.querySelector("div");
box.onmouseover=(evt)=>{
    console.log(evt.clientX,evt.clientY);
    console.log("you are inside box")
};*/


//Event Listeners
/*let button=document.querySelector("button");
button.addEventListener("Click",()=>{
    console.log("button1 was clicked");
});

button.addEventListener("Click",()=>{
    console.log("buuton1 was clicked-handler2");
});
*/





//practice Q
/*let mode=document.querySelector("mode");
let body=document.querySelector("body");
let curmode="light";
mode.addEventListener("click",()=>{
        if(curmode=="light")
    {
            curmode="dark";
            body.classList.add("dark");            
    }else{
            curmode="light";
            body.classList.add("light");             
    }
    console.log(curmode);
});*/

 
//classes annd objects
/*const student={
    fullame :"tirth rana",
    printmarks: function(){
        console.log("marks=98", this.marks)
    }
};


class xyz{  
    A(){
        console.log("class A");
    }

    B(){
            console.log("class B");
    }
}
let obj=new xyz();*/

//practice Q1
/*let data="secret information";
class user{
     constructor(name,email){
            this.name=name;
            this.email=email;
        }
        viewdata(){
            console.log("data=",data);
        }
}
let obj=new user("tirth","tirthrana2006@gmail.com");*/

//Q2 /*
/*
class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
}
class admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editdata(){
        console.log("user can edit website");
    }
}
let adm= new admin("tirth","tirthrana@gmail.com");*/


 //settimeout()
  


 //callback hell
 /*function getdata(dataid,getnextdata){
    setTimeout(()=>{
        console.log("data",dataid);
        if(getnextdata){
            getnextdata();
        }
    },2000);

 }
getdata(1,()=>{
    getdata(2,()=>{
        getdata(3,()=>{
            getdata(4);
        });
    });
});*/


//promises
/*let promsie=new Promise((resolve, reject) => {
    console.log("I am promise");
   // resolve("success"); 
    reject("failed");
})

function getdata(dataid,getnextdata){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataid);
            resolve("success");
  
            if(getnextdata){
            getnextdata();
            }
        }, 5000);
    });
 };*/


  


///promises if resolved use promise.then()
//promises if reject use promise.catch()
/*let age=prompt("enter age");
const getpromise=()=>{
   return  new Promise((resolve,reject)=>{
         if(age>=18){
            console.log("eligible to vote");
            resolve("success");
         }else{
            console.log("not elgible to vote");
            reject("failed");
         }
    });
};
let promise=getpromise();
promise.then(()=>{
    console.log("promise fullfilled");
});
promise.catch(()=>{
    console.log("promise rejected");
});*/





//promise chaining
/*const getpromise1=()=>{
    return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("Username");
                resolve("Success");
            },4000);
    });
};
const getpromise2=()=>{
    return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("Password");
                resolve("Success");
            },4000);
    });
};
console.log("Fetchiing Promise1");
let p1=getpromise1();
p1.then((res)=>{
    console.log("Promise1 fullfilled");

     let p2=getpromise2();
     console.log("Fetchiing Promise2");
     p2.then((res)=>{
     console.log("Promise2 Fullfilled");
    });
      
}); */
   
  




//promise chain
/*function getdata(dataid){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataid);
            resolve("success");
          }, 5000);
    });
 };
 
 getdata(1).then((res)=>{
    console.log(res);
 });
 
 getdata(1)
    .then((res)=>{
        console.log("getting data2");
        return getdata(2);
        });
        
    .then((res)=>{
        console.log("getting data2");
        return getdata(3);
        });
    .then((res)=>{
        console.log("getting data2");
        console.log(res);
       });
*/






//Async Await
//async function returns promise everytime/compulsory
/*let username;
function student(username){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("username",username);
            resolve("success");
        },5000);
});
} 
async function details(){
    await student(1);   
}*/  






//fetch API
/*const URL = "https://api.thecatapi.com/v1/images/0XYvRd7oD";
const factpara=document.querySelector("#fact");
const btn=document.querySelector("#btn");

const getfacts=async()=>{
let response = await fetch(URL);
console.log(response);
let data=await response.json();
factpara.innerText=data[0].text;
};
btn.addEventListener("click",getfacts); */






//http request methods
//get post etc..
// const response=await fetch("https://api.thecatapi.com/v1/images/0XYvRd7oD",{
//     method:"POST",
// });







//Namaste Javascript Season 1

//closure
/*function outer(){
    var a=10;
    function inner(){
        console.log(a);
    }
    return inner;
}
outer()();*/




/*function A(){
    let a=10;
    function B(){
        let b=20;
        console.log(a,b);
    }
   
    return B;    
}
A()();*/

/*function para1(b){
    let a=100;
    function para2(){
        console.log(a,b);
    }
    return para2;
}
let close=para1('helloworld');
close();*/





//constructor using closure
/*function Counter(){
    var count=0;
    this.increamentCounter = function(){
        count++;
        console.log(count);
    }
    this.decreamentCounter = function(){
        count--;
        console.log(count);
    }
}
let counter1= new Counter();
counter1.increamentCounter();
counter1.increamentCounter();
counter1.decreamentCounter();*/




//functions
//function statement
/*function a(){
    console.log("a called");
}
a();*/

//function expression
/*var b=function b(){
    console.log("b called");
}
b();*/

//function declaration=function statement

//anonymous function - function without name
/*function (){

}*/

//named function expression 

//difference between parameter and argument 
/*function A(parameters){
    console.log("a");
}
A(arguments);*/

//first class function - the ability to use function as an rule or
//passed or return as argument

//arrow function





//callbacks 
/*setTimeout(function () {
    console.log("timer");
}, 5000);

function x(y){
    console.log("X");
    y();
}
x(function y(){
    console.log("Y");
});*/

//callback example
/*function attachEventListeners(){
let count=0;
document.getElementById("clickme").addEventListener("click",function xyz(){
    console.log("button clicked",++count);
});
}
attachEventListeners();*/




//higher order function
/*function x(){
    console.log("Namaste");
 }

function y(x){
    x();
}*/

//Example
/*const radius=[3,1,2,4];
const area=function (radius){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(Math.PI*radius[i]*radius[i]);
    }
    return output;
}
area(radius); */




//optimizing code
/*const radius=[3,1,2,4];

const area=function (radius){
    return Math.PI*radius*radius;
}
const circumference=function (radius){
    return 2*Math.PI*radius;
}
const diameter=function (radius){
    return 2*radius;
}
const calculate=function (radius,logic){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
}
console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));
*/




//map()

/*const arr=[5,1,3,2,6];

function double(x){
    return x*2;
}
function triple(x){
    return x*3;
}
function binary(x){
    return x.toString(2);
}
//const output=arr.map(double);
//const output=arr.map(triple);
const output=arr.map(binary);

console.log(output);*/


//filter()

/*const arr=[5,1,3,2,6];
function isOdd(x){
    return x%2;
}
const output=arr.filter(isOdd);
console.log(output);

const arr=[5,1,3,2,6];
function isEven(x){
    return x%2===0;
}
const output=arr.filter(isEven);
console.log(output);*/


//reduce()
/*const arr=[5,1,3,2,6];
const output=arr.reduce(function (acc,curr){
    acc=acc+curr;
    return acc;
},0);
console.log(output);

const arr=[5,1,3,2,6];
const output=arr.reduce(function (max,curr){
    if(curr>max){
        max=curr;
    }
    return max;
});
console.log(output);*/


//example
/*const users=[
    { firstname:"Akshar",lastname: "Javiya",age:19},
    { firstname:"Parthiv",lastname:"nanavati",age:20},
    { firstname:"Divy",lastname:"Mistry",age:20},
]; 
const output=users.map((x)=>x.firstname+x.lastname);
console.log(output);

const op=users.map((x)=>x.firstname+" "+x.age);
console.log(op);

const ABC=users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age]=++acc[curr.age];
    }else{
        acc[curr.age]=1;
    }
    return acc;
    
}, {});
console.log(ABC);


const tirth=users.filter((x)=>x.age>19).map((x)=>x.firstname);
console.log(tirth);
*/




//season 2- Namaste Javascript
//callbacks
//promises
//promise chaining 
/*const cart=['shoes','pants','kurta'];
 createorder(cart,function (orderid){
    proceedToPayment(orderid,function (paymentInfo){
        showOrderSummary(paymentInfo,function (){
            updateWalletBalance();
        });
    });
});

createOrder(cart)
.then(function(orderid){
   return proceedToPayment(orderid);
})

,then(function (orderid){
    return proceedToPayment(orderid);
})

.then(function (paymentInfo){
    return  proceedToPayment(paymentInfo);
})

,then(function (paymentInfo){
    return  updateWalletBalance(paymentInfo);
})*/


//promises 
//examples
/*const cart=['shoes','pants','kurta'];

const promise=createorder(cart);
promise.then(function (){
    console.log(orderid);
})

function createorder(cart){
    const pr=new promise(function (resolve,reject){
        if(!validatecart(cart)){
            const err=new error ('cart is not valid');
            reject(err);
        }

        const orderid='12345';

        if(orderid){
            resolve(orderid);
        }
    });
}
return pr;

function validatecart(cart){
    return true;
}*/ //half code







//promise apis

//promise.all()
/*
const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p1 sucess"),3000);
});

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p2 sucess"),1000);
});

const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p3 sucess"),2000);
});

Promise.all([p1,p2,p3])
    .then((res)=>{
    console.log(res);
})
    .catch((err)=>{
    console.log(err);
});
/*



//promise.settled()
const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p1 sucess"),3000);
});

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p2 sucess"),1000);
});

const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p3 sucess"),2000);
});

Promise.all([p1,p2,p3])
    .then((res)=>{
    console.log(res);
})
    .catch((err)=>{
    console.log(err);
});



/*
//promsie.race()
const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p1 sucess"),3000);
});

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p2 sucess"),1000);
});

const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p3 sucess"),2000);
});

Promise.all([p1,p2,p3])
    .then((res)=>{
    console.log(res);
})
    .catch((err)=>{
    console.log(err);
});




//promise.any()
const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p1 sucess"),3000);
});

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p2 sucess"),1000);
});

const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p3 sucess"),2000);
});

Promise.all([p1,p2,p3])
    .then((res)=>{
    console.log(res);
})
    .catch((err)=>{
    console.log(err);
});
*/




//async in js
/*
async function getdata(){
    return "namaste";
}
const data=getdata();
console.log(data);
data.then(res=> console.log(res));
*/


//async await
//await can only be used inside an async function

const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise resolve value");
    },10000);
});

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise resolve value");
    },5000);
});

async function handlepromise(){
    console.log("hello world");

    const value=await p1;
    console.log("namaste js");
    console.log(value);

    const value2=await p2;
    console.log("namaste js2");
    console.log(value2);
}
handlepromise();


 
 
