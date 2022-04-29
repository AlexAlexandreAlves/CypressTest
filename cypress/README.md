## Se for iniciar um projeto do zero, ou somente instalar o cypress, siga este passo a passo:

#### Pré-requisitos 
- NodeJS
- npm

#### Se não tiver o node instalado:
```
npm install
```

#### Para iniciar um projeto:
```
npm init
renomeie seu projeto e confirme as demais perguntas
test command: npx cypress open 
```
  
#### Para instalar e iniciar o Cypress:
```
npm i cypress --save-dev
npm run test
```  

#### Para executar o Cypress sem abrir interface gráfica:
```
npx cypress run
```  
#### Para gerar o relatório de testes em HTML instale:
```
npx i -D mochawesome
```  
- Ajuste o arquivo cypress.json conforme a imagem:

{
    "reporter": "mochawesome",
    "reporterOptions": {
        "reportDir": "cypress/report/mochawesome-report",
        "overwrite": true,
        "html": true,
        "json": false,
        "timestamp": "mmddyyyy_HHMMss"
    }
}
