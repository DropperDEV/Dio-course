class Account {
  name: string;
  accountNumber: number;
  balance: number;

  constructor(name: string, accountNumber: number, balance: number) {
    this.name = name;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }


  deposit = (entrada: number) => {
    if (entrada > 0) {
      this.balance += entrada;
      console.log(`O seu saldo atual: ${this.balance}`);
    } else console.log("Valor de deposito deve ser maior que zero");
  };

  withdraw = (retirado: number) => {
    if (this.balance > retirado) {
      console.log(`Você retirou ${this.balance - retirado}`);
    } else console.log("Não há saldo suficiente");
  };
}

class AccAdmin extends Account{
    authorization: boolean = false;
    constructor(name:string,accountNumber:number,authorization:boolean){
        super(name,accountNumber,0)
        this.authorization = authorization
    }

    setAuthorization(entrada:boolean){
        this.authorization = entrada;
        this.authorization ? console.log("Conta autorizada") : console.log("Acesso restrito")
    }
}
const newAccount: Account = new Account("James", 4023041, 0);
newAccount.deposit(40);
newAccount.withdraw(10);

const newAdmin: AccAdmin = new AccAdmin("Jotinha",55,false)
newAdmin.setAuthorization(true);
newAdmin.setAuthorization(false)