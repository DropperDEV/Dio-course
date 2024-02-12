import { login2 } from "./login2";

describe('Login',() =>{
    const mockAlert = jest.fn();
    window.alert = mockAlert;
    it("Deve retornar um alert", () => {
        login2();
        expect(mockAlert).toHaveBeenCalledWith("Seja bem vindo!")
    })
})