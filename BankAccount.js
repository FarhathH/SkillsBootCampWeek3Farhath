//Created a class
class BankAccount{

    constructor(hol, bal, accNo, sort){
        
        this.accountHolder = hol
        this.balance = bal
        this.sortCode = sort
        this.accountNumber = accNo
        

    }

    getDescription(){ //this method is used for return all the values
        return `${this.accountHolder} has £${this.balance} in their bank account. The account number is ${this.accountNumber} and the sort code is ${this.sortCode}.`
    }
   
    
    modifyBalance(num1){ //increases the balance based on the deposit
        return this.balance += num1
    }
  
}

//new object with values in regards to the parameters from the constructor
let acc1 = new BankAccount("Sally Face",393425, 99857849 ,545657)


console.log(acc1.balance) //prints out balance from acc1 object
acc1.modifyBalance(100) //using function to increment balance
console.log(acc1.balance) //prints out new balance
console.log(acc1.accountHolder) //prints the name of the account holder

console.log(acc1.getDescription()) //prints out all the info of the bank account