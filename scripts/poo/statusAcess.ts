class Vehicle {
    private name: string;
    private readonly chassi: number;

    constructor(name:string,chassi:number){
        this.name = name;
        this.chassi = chassi;
    }

    setName(n:string):void{
        this.name = n
        console.log(`O veículo se chama ${this.name}`)
    }
    getName():string{
        return this.name
    }

    getChassi():number{
        return this.chassi
    }
}