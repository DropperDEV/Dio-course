import { DioAccount } from "./DioAccount";

export class VipAccount extends DioAccount{
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
      }

      deposit = (entrada: number): void => {
        if (this.validateStatus()) {
            entrada += 10
          this.balance += entrada;
          console.log(`Você depositou ${entrada}`);
        } else throw new Error("Conta invalida!");
      };
}