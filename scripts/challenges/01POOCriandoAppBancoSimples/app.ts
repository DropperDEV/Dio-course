import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { VipAccount } from "./class/VipAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "James", 10);
peopleAccount.deposit(20);
const companyAccount: CompanyAccount = new CompanyAccount("LTV", 20);
companyAccount.deposit(100);
companyAccount.getLoan(200);
companyAccount.getLoan(100);
companyAccount.getBalance();
companyAccount.payLoan(400);
companyAccount.getBalance();
companyAccount.payLoan(150);
companyAccount.getBalance();
const vipAccount: VipAccount = new VipAccount("Carlos", 3);
vipAccount.deposit(10);
vipAccount.getBalance();
vipAccount.withdraw(5);
vipAccount.getBalance();

console.log(peopleAccount);

console.log(companyAccount);

console.log(vipAccount);
