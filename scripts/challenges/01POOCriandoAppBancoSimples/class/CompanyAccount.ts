import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  private hasLoan?: boolean = false;

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (loan:number): void => {
    if(this.validateStatus()){
      this.balance += loan
      this.hasLoan = true;
      console.log(`Você pegou um emprestimo de ${loan}`)
    } else throw new Error("Conta invalida!")
  }
}
