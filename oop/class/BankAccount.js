class BankAccount {
  constructor(accountNumber, accountName) {
    this.accountName = accountName;
    this.accountNumber = accountNumber;
    this.accountBalance = 0;
  }


  getAccountNumber() {
    return this.accountNumber;
  }

  getAccountBalance() {
    return this.accountBalance;
  }

  deposit(amount) {
    this.accountBalance += amount;
    return true;
  }

  withdraw(amount) {
    if (this.accountBalance > amount) {
      this.accountBalance -= amount;
      return true;
    } else {
      return false;
    }
  }
}


export default BankAccount;