//Created a class
class BankAccount{

    constructor(hol, bal, accNo, sort, Dra){
        
        this.accountHolder = hol
        this.balance = bal
        this.sortCode = sort
        this.accountNumber = accNo
        this.overDraft = Dra
        

    }

    getInterest(percentage){ //calculates interest increase
        
        let interestRate = percentage/100 // converting number to a decimal
        let increase = this.balance * interestRate //calculating increase
        this.balance += increase // calculating new balance
        
    }

    getDescription(){ //this method is used for return all the values
        return `${this.accountHolder} has £${this.balance} in their bank account. The account number is ${this.accountNumber} and the sort code is ${this.sortCode}.`
    }
   
    
    modifyBalance(num1){ //increases/decreases the balance based on the deposit
        //checking the condition so that the overDraft limit can affect how much money can be taken out.
        if(this.balance-num1 < this.overDraft){
            console.log("This exceeds the overdraft limit")
        }else{

            return this.balance -= num1
        }
    }
  
}

//new object with values in regards to the parameters from the constructor
let acc1 = new BankAccount("Sally Face",393425, 99857849 ,545657, -100)

for(let year = 1; year<=5; year++){
acc1.getInterest(4)
console.log(`Year ${year}:` + acc1.getDescription())
}



// console.log(acc1.balance)
// acc1.modifyBalance(458375)
// console.log(acc1.balance)
// acc1.modifyBalance(653)
// console.log(acc1.balance)
// console.log(acc1.balance) //prints out balance from acc1 object
// acc1.modifyBalance(100) //using function to increment balance
// console.log(acc1.balance) //prints out new balance
// console.log(acc1.accountHolder) //prints the name of the account holder

// console.log(acc1.getDescription()) //prints out all the info of the bank account