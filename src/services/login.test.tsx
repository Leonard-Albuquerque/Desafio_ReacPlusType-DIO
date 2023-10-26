import { Login } from "./login"

describe ('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert;


    it('Deve exibir um alert com boas vindas', () =>{
        Login()
        expect(mockAlert).toBeCalled()
    })
})