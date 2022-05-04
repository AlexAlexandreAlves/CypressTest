/*--------------------------------------------------------
    describe -> Define o nome do caso de teste
*-------------------------------------------------------*/
describe('Testes na tela inicial', () => {

    /*--------------------------------------------------------
     BeforeEach -> Comando que inicia a suite de testes
     cy.vistit -> Acessa a URL que serão executado os testes
    *-------------------------------------------------------*/
    beforeEach(() => {
        cy.visit('/')

    })

})