/*--------------------------------------------------------
    describe -> Define o nome do caso de teste
*-------------------------------------------------------*/
describe('Login e registro de usuarios alura pic', () => {

    /*--------------------------------------------------------
     BeforeEach -> Comando que inicia a suite de testes
     cy.vistit -> Acessa a URL que serão executado os testes
    *-------------------------------------------------------*/
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com');
    })

    /*--------------------------
    it -> item do caso de teste
    ---------------------------*/
    it('verifica mensagens de validação', () => {

        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');

    })

    it('verifica mensagem de email invalido', () => {

        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('alex');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');

    })

    it('verifica senha com menos de 8 caracteres', () => {

        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');

    })

    it('verifica o campo Name com letras maiusculas', () => {

        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('ALEX');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');

    })

    it('fazer um login com usuário invalido', () => {

        cy.login('Alex', '1234')
        cy.on('window.alert', (str) => {
            expect(str).to.equal('Invalid user name or passoword')
        })
    
    })

    it('fazer um login com usuário valido', () => {

        cy.login('flavio', '123')
        cy.on('window.alert', (str) => {
        cy.contains('a','(Logout)').should('be.visible')
        })
    
    })
})