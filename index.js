const express = require('express');
const app = express();
const port = 3000;

app.get('/',(request,response) => {
	response.send("Hello Word");
})

app.get('/calculadora/adicao', (request,response) => {
    let n1 = request.query.n1;
    let n2 = request.query.n2;
    console.log('/calculadora/adicao');
    response.send({
         "operacao":'adicao',
         "resultado":Number(n1) + Number(n2)
    });
})

app.get('/calculadora/subtracao', (request,response) => {
    let n1 = request.query.n1;
    let n2 = request.query.n2;
    console.log('/calculadora/subtracao');
    response.send({
         "operacao":'subtracao',
         "resultado":Number(n1) - Number(n2)
    });
})

app.get('/calculadora/multiplicacao', (request,response) => {
    let n1 = request.query.n1;
    let n2 = request.query.n2;
    console.log('/calculadora/multiplicacao');
    response.send({
         "operacao":'multiplicacao',
         "resultado":Number(n1) * Number(n2)
    });
})

app.get('/calculadora/divisao', (request,response) => {
    let n1 = request.query.n1;
    let n2 = request.query.n2;
    if (n2 != 0) {
    console.log('/calculadora/divisao');
    response.send({
         "operacao":'divisao',
         "resultado":Number(n1) / Number(n2)
    });
	}
	else { response.send("Não é possivel dividir por 0") }
})

app.listen(port, ()=>{
    console.log('Aplicacao rodando em http://localhost:',port);
})