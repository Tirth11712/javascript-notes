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

//example 2
async function fetchapi(){
    const data=await fetch("https://api.otp.dev/v1/verifications");
    const jsonvalue=await data.json();
    console.log(jsonvalue);
}
fetchapi().catch((err)=>console.log(err));



