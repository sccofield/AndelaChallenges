import SavingsAccount from './class/SavingAccount';
import CurrentAccount from './class/CurrentAccount';

let michaelUmanah = new SavingsAccount('Michael Umanah', 1034578920)
michaelUmanah.deposit(5000) // This deposits money into the new account

michaelUmanah.getAccountNumber() //This returns the account number
michaelUmanah.getAccountBalance() //This gives the account balance of michael

michaelUmanah.withdraw(500000) //This returns false cos the amount is more than the balance.