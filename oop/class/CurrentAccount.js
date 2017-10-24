import BankAccount from "./BankAccount";

class CurrentAccount extends BankAccount {
  constructor(accountNumber, accountName) {
    super(accountNumber, accountName);
    this.maintenanceFee = 500;
    this.accountBalance = 0
  }

  getMaintenanceFee() {
    if (this.accountBalance > this.maintenanceFee) {
      this.accountBalance -= this.maintenanceFee;
      return true;
    } else {
      return false;
    }
  }

  withdraw(amount) {
      this.accountBalance -= amount; // this withdraw metthods overide the withdraw metthod in BankAccount
      return true;  // customers can withdraw even when they do not have enough money in their balance.
    
  }
}

export default CurrentAccount;
