import login from "./login"

describe('login',() => {
    const mockAlert = jest.fn();
        window.alert = mockAlert;

    it("Retonar balão de mensagem", () => {
        
        login()
        expect(mockAlert).toHaveBeenCalledWith('Bem vindo!')
    })
})