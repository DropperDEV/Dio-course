export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  protected balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  /*setName = (name: string): void => {
    this.name = name;
    console.log("Nome alterado com sucesso!");
  };*/

  getName = (): void => {
    console.log(`Nome: ${this.name}`)
  };

  getBalance = (): void => {
    console.log(`Saldo atual: ${this.balance}`);
  };

  getAccountNumber = (): void =>{
    console.log(`Numero da conta: ${this.accountNumber}`)
  }

  deposit = (entrada: number): void => {
    if (this.validateStatus()) {
      this.balance += entrada;
      console.log(`Você depositou ${entrada}`);
    } else throw new Error("Conta invalida!");
  };

  withdraw = (saida: number): void => {
    if (this.validateStatus()) {
      if (saida < this.balance) {
        this.balance -= saida;
        console.log(`Você sacou ${saida}`);
      } else console.log("Você não possui saldo");
    } else throw new Error("Conta invalida!");
  };

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
