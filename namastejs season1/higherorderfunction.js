function x(){
    console.log("Namaste");
 }

function y(x){
    x();
}

//Example
const radius=[3,1,2,4];
const area=function (radius){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(Math.PI*radius[i]*radius[i]);
    }
    return output;
}
area(radius); 