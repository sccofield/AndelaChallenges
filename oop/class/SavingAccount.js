import BankAccount from './BankAccount';

class SavingsAccount extends BankAccount {
  constructor(accountNumber, accountName) {
    super(accountNumber, accountName, );
    this.interestRate = 5 ;
  }

  addInterest() {
    const interest = this.accountBalance * this.interestRate/100
    this.deposit(interest);
  }

}

export default SavingsAccount;