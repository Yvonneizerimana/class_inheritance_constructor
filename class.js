class MyStudent{
    constructor(fname,lname){
        this.f=fname;
        this.l=lname;
    }

    greet(){
        return "Hello "+this.f;
    }
    changeName(newName,newNamee){
this.fw=newName;
this.ls=newNamee;

return "hey new one"+this.fw+this.ls;
    }
}

let s1=new MyStudent("yvonne","anee");

console.log(s1.greet());
console.log(s1.changeName("muneza","alain"));
