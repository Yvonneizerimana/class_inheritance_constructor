function person(firstname,lastname){
    this.first=firstname;
    this.last=lastname;

}

//here when you print age you will get 67
person.prototype.age=67;
const person1=new person("yvonne","mutoni");

//here when you print age of person 2 and person 3 you will get the same age that is 50.
person.prototype={age:50};

const person2=new person("bienaime","reine");

const person3=new person("aline","uwase");

console.log(person1.age);
console.log(person2.age);
console.log(person3.age);

