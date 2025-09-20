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
