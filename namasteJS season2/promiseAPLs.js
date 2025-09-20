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

