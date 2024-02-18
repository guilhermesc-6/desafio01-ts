import { BonusAccount } from "./class/BonusAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

console.log("\n PeopleAccount: ");
const peopleAccount: PeopleAccount = new PeopleAccount(1, "John", 10);
peopleAccount.deposit(100);
peopleAccount.withdraw(110);
peopleAccount.withdraw(50);
peopleAccount.getBalance();

console.log("\nCompanyAccount: ");
const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
companyAccount.deposit(1000);
companyAccount.getLoan(1000);
companyAccount.getBalance();

console.log("\nBonusAccount:");
const bonusAccount: BonusAccount = new BonusAccount("Bonus", 30);
bonusAccount.getBalance();
bonusAccount.deposit(100);
bonusAccount.getBalance();
