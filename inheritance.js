
class MyPerson{
    constructor(name){
        this.names=name;
    }
    greet(){
        console.log("hello"+this.names);
    }
}
class Student extends MyPerson{

    constructor(name){
        super(name);
    }
}
obj2 =new Student("yvonne");
console.log(obj2.greet());
