import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { PlusAccount } from "./class/PlusAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10);
peopleAccount.deposit(250);
console.log(peopleAccount);
const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
companyAccount.deposit(100);
console.log(companyAccount);
const plusAccount: PlusAccount = new PlusAccount("lucas", 38);
plusAccount.deposit(140);
console.log(plusAccount);
