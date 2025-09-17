setTimeout(function () {
    console.log("timer");
}, 5000);

function x(y){
    console.log("X");
    y();
}
x(function y(){
    console.log("Y");
});

//callback example
function attachEventListeners(){
let count=0;
document.getElementById("clickme").addEventListener("click",function xyz(){
    console.log("button clicked",++count);
});
}
attachEventListeners();