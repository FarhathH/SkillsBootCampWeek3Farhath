//recaping classes

//Mother class
class Animal{
    constructor(name, age){
        this.name = name
        this.age = age

    }

    iAmParent(){
        console.log(`${this.name} belongs to me`)
    }
}

//Child class which inherits from Animal class
class Monkey extends Animal{
    constructor(name, age){
        super(name, age) //super function important for child variables    
    }

    startClimbing(){
        console.log(`${this.name} has started climbing and got knocked out by a falling coconut.\n`)
    }

    petMonkey(){
        console.log(`${this.name} does a back flip\n`)
    }

}


//object from monkey class and calling different methods
let monke = new Monkey("Roger", 2)
console.log(monke.name)
console.log(monke.age)
monke.startClimbing()
monke.petMonkey()


//Child class
class Dog extends Animal{
    constructor(name, age){
        super(name, age) //inherit properties from mother class
    }

    makeSound(){
        console.log("Woof")
    }

    getAgeInDogyears(){
        return this.age * 7
    }

}

//new object from dog class
let dog1 = new Dog("Benny", 5)


console.log(dog1.name) //printing the dog's name
dog1.makeSound() //calling method get dog sound
console.log(dog1.getAgeInDogyears()) //prints out dog's age

//calling method in parent class using both objects
dog1.iAmParent()
monke.iAmParent()


