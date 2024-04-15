export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName = (name: string): void => {
    this.name = name;
    console.log("Nome alterado com sucesso!");
  };

  getName = (): string => {
    return this.name;
  };

  deposit = (valorDeposito: number): void => {
    if (this.validateStatus()) {
      this.balance += valorDeposito;
      console.log("Voce depositou R$", valorDeposito);
    }
  };

  withdraw = (valorSaque: number): void => {
    if (this.validateStatus() && this.balance > valorSaque) {
      this.balance -= valorSaque;
      console.log("Voce sacou R$", valorSaque);
    } else {
      console.log("saldo insuficiente");
    }
  };

  getBalance = (): void => {
    console.log(this.balance);
  };

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
