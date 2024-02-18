import { DioAccount } from "./DioAccount";

export class BonusAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (valor: number): void => {
    if (this.validateStatus()) {
      valor += 10;
      this.balance += valor;
      return console.log("Depósito realizado com sucesso");
    }
  };
}
