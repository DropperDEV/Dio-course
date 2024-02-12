import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  private hasLoan?: boolean = false;
  private loanBalance: number = 0;

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (loan: number): void => {
    if (this.validateStatus()) {
      if (this.hasLoan) {
        console.log(`Pague o emprestimo de ${this.loanBalance} primeiro!`);
      } else {
        this.loanBalance += loan;
        this.balance += loan;
        this.hasLoan = true;
        console.log(`Você pegou um emprestimo de ${loan}`);
      }
    } else throw new Error("Conta invalida!");
  };

  payLoan = (pay: number): void => {
    if (this.validateStatus() && this.hasLoan) {
      if (this.loanBalance > pay) {
        this.balance -= pay;
        console.log(`Você pagou ${pay} de seu emprestimo`);
      } else if (this.loanBalance == pay) {
        this.balance -= pay;
        console.log("Você pagou todo seu emprestimo");
      } else console.log("Insira um valor menor ou igual ao emprestimo");
    } else throw new Error("Conta invalida!");
  };
}
