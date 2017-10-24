import { assert } from "chai";
import SavingsAccount from '../class/SavingAccount';
import CurrentAccount from '../class/CurrentAccount';


describe("OOP test suite", () => {
    it("getAccountbalance should always return a number", () => {
      let result = new SavingsAccount('Michael Umanah', 1034578920).getAccountBalance() ;
      assert.typeOf(result, "number");
    });

      it("savingsaccount should be an object", () => {
        let result = new SavingsAccount('Michael Umanah', 1034578920) ;
        assert.typeOf(result, "object");
      });

      it("currentaccount should be an object", () => {
        let result = new CurrentAccount('Koya', 2345678910) ;
        assert.typeOf(result, "object");
      });

      

      

})
