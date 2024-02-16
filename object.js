class Person{
    constructor(name){
        this.names=name;
    }
    static greet(x){
        console.log("Hello");
    }
}

obj =new Person("nelly");

//here means you can't call static method by using object of a class, you call it only through it's class name.
Person.greet();


//here we create another class showing how you can pass static method can pass to the object properties.


class P1{
constructor(location){
    this.address=location;
}
static welcome(newOne){
    console.log("welcome to  "+ newOne.address);
}

}

obj2=new P1("byumba"); 

//for here to pass to the properties of object you add a parameter in static method and call it by passinng class and
P1.welcome(obj2) ;
