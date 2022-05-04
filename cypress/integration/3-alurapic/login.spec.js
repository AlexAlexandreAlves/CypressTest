describe('Login de usuarios alura pic', () => {

    beforeEach(() => {

        /*----------------------------------------------------
        Introduzindo a chamada do baseURL através da url
        fixa no cypress.json, e chamando através do ('/')
        *----------------------------------------------------*/
        cy.visit('/')

        /*-----------------------------------------------------
        Introduzindo Mocks e Stubs através da requisição 400,
        quando deveria retornar 200
        *------------------------------------------------------

        cy.intercept('POST', 'https://apialurapic.herokuapp.com/user/login',{
        statusCode: 400
        }).as(stubPost)*/

    })

    it('fazer login de usuario valido', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'))
        cy.contains('a', '(Logout)').should('be.visible');
        //cy.wait('@stubPost')
    })

    it('fazer login de usuario invalido', () => {
        cy.login('jacqueline', '1234');
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password');
        })
    })

})