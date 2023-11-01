//recaping classes

//Mother class
class Animal{
    constructor(name, age){
        this.name = name
        this.age = age

    }

   

}

//Child class
class Dog extends Animal{
    constructor(name, age){
        super(name,age) //inherit properties from mother class
    }

    makeSound(){
        console.log("Woof")
    }

    getAgeInDogyears(){
        return this.age * 7
    }

}

//new object drom dog class
let dog1 = new Dog("Benny", 5)


console.log(dog1.name)
dog1.makeSound()
dog1.age
dog1.getAgeInDogyears()



