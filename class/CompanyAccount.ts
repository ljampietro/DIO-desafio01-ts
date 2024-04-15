import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (valorEmprestimo: number): void => {
    if (this.validateStatus()) {
      this.balance += valorEmprestimo;
      console.log("Voce pegou um empréstimo de R$", valorEmprestimo);
    } else {
      throw new Error("conta desativada. não é possivel pegar emprestimo");
    }
  };
}
