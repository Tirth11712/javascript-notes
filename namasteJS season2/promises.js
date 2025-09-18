
//promises 
//examples
const cart=['shoes','pants','kurta'];

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
}
//half code





