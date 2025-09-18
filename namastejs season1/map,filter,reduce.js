

//map()

const arr=[5,1,3,2,6];

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

const arr=[5,1,3,2,6];
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
const arr=[5,1,3,2,6];
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
console.log(output);
