import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (valor: number): void => {
    if (this.validateStatus()) {
      this.balance += valor;
      return console.log("Empréstimo realizado");
    }
    return console.log("Não foi possível realizar o empréstimo");
  };
}
