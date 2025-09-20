function student(name,age){
    this.name=name;
    this.age=age;
}
const school=new student("tirth","20");
console.log(school.name,school.age);




//call apply bind ()
const person = {
     name: "Tirth" 
};

function introduce(age, city) {
  console.log(`I am ${this.name}, ${age} years old from ${city}`);
}

introduce.call(person, 21, "vadodara");
introduce.apply(person, [21, "Ahmedabad"]);
const introLater = introduce.bind(person, 21);
introLater("Ahmedabad");





//this inside a objects method
const student1={
    name:"tirth",
    printname:function (){
        console.log(this.name);
    },
};
student1.printname();
const student2={
    name:"mitanshu",
};

student1.printname.call(student2);





//this keyword inside arrow function
const student3={
    age:20,
    x: function name(){
        const y=()=>{
            console.log(this);
        }
        y();
    },
};
student3.x();
