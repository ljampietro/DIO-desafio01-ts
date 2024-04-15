import { DioAccount } from "./DioAccount";

export class PlusAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (valorDeposito: number): void => {
    this.balance += valorDeposito + 10;
    console.log("Voce depositou R$", valorDeposito);
  };
}
