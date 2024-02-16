function person(firstname, lastname, age){
    this.first=firstname;
    this.last=lastname;
    this.ages=age;
}

const person1=new person("yvonne","izere",40);
const person2=new person("alice","uwera",70);
const person3=new person("mugeni","ange",80);

person1.location="kacyiru";

console.log(person1);
console.log(person2);
console.log(person3);

person2.greet=function(){
    console.log("Hello monday");
}
person2.greet();