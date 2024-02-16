class MyBaby{

    set details(names){
        this.hernames=names;
      

    }
    get details(){
        return "my baby names is"+this.hernames;

    }
}

const obj1=new MyBaby();

obj1.details="amely anne";

console.log(obj1.details);