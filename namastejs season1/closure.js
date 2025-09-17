//closure
function outer(){
    var a=10;
    function inner(){
        console.log(a);
    }
    return inner;
}
outer()();




function A(){
    let a=10;
    function B(){
        let b=20;
        console.log(a,b);
    }
   
    return B;    
}
A()();

function para1(b){
    let a=100;
    function para2(){
        console.log(a,b);
    }
    return para2;
}
let close=para1('helloworld');
close();





//constructor using closure
function Counter(){
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
counter1.decreamentCounter();


