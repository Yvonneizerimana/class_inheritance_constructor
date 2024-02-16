class Person{
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }

    #fullName(){
        return this.firstname+""+this.lastname;
    }
    display(){
        console.log(this.#fullName());
    }
}
obj = new Person("Yvonne","IZERIMANA");
obj.display();