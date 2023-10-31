//Created a class
class BankAccount{

    constructor(hol,bal, sort, accNo){
        
        this.accountHolder = hol
        this.balance = bal
        this.sortCode = sort
        this.accountNumber = accNo

    }
   
    
    modifyBalance(num1){
        return this.balance += num1
    }
  
}


let acc1 = new BankAccount("Sally Face",393425, 545657, 99857849)

console.log(acc1.balance)
acc1.modifyBalance(100)
console.log(acc1.balance)

console.log(acc1.accountHolder)