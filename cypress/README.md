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
```
  
#### Para instalar e iniciar a primeira vez o Cypress:
```
npm i cypress --save-dev
test command: npx cypress open 
npm run test
```  
#### Para iniciar pode utilizar também:
```
npm run test
```  
#### Para executar o Cypress sem abrir interface gráfica:
```
npx cypress run
```  
#### Para gerar o relatório de testes em HTML gerando uma evidência em video instale:
```
npx i -D mochawesome
```  
- Ajuste o arquivo cypress.json conforme a imagem:

![image](https://user-images.githubusercontent.com/70979408/166079915-2381720d-67e8-4744-a4b2-faa949d16bdc.png)

- Agora execute novamente informando o reporter:

```
npx cypress run --reporter mochawesome
```  

### Conectando ao Dashboard do Cypress
- Faça loggin no inicializador do Cypress
- Crie um projeto 
- Pare a execução no vcscode
- Verifique que será gerado um projectId no arquivo cypress.json
- execute o npx cypress run com o código gerado do seu projeto.

```
npx cypress run --record --key 4236179e-c6ab-49f8-8d0f-0d096bad41d9
```
