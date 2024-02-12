import { multiplica, soma } from "./calcs"

describe('calc', () => {
    it("deve adicionar 1 ao numero informado", () => {
        const value = soma(1);
        expect(value).toBe(2);
    })

    it("deve multiplicar o número por dois", ()=> {
        const value = multiplica(2,2);
        expect(value).toBe(4);
    })
    it("deve multiplicar o número por tres", ()=> {
        const value = multiplica(2,3);
        expect(value).toBe(6);
    })
    it("deve retornar um erro", ()=> {
        const value = multiplica(2,4);
        expect(value).toBe("Multiplicador deve ser dois ou tres");
    })
    
})