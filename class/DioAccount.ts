export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  protected balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  };

  deposit = (valor: number): void => {
    if (this.validateStatus()) {
      this.balance += valor;
      return console.log("Depósito realizado com sucesso");
    }
  };

  withdraw = (valor: number): void => {
    if (this.validateStatus()) {
      if (valor > this.balance) {
        return console.log("Saldo insuficiente");
      }

      this.balance -= valor;
      return console.log("Saque realizado com sucesso");
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
