/*
Desafios Iniciais JavaScript - Órbi Web Game
2 / 4 - Dividindo X por Y
 Básico
 Princípios Básicos

Desafio
Você terá o desafio de escrever um algoritmo que leia 2 números e imprima o resultado da divisão do primeiro pelo segundo. Caso não for possível, mostre a mensagem “divisao impossivel” para os valores em questão.

Entrada
A entrada contém um número inteiro N. Este N será a quantidade de pares de valores inteiros (X e Y) que serão lidos em seguida.

Saída
Para cada caso mostre o resultado da divisão com um dígito após o ponto decimal, ou “divisao impossivel” caso não seja possível efetuar o cálculo.

 
Exemplo de Entrada	Exemplo de Saída
3
3 -2
-8 0
0 8

-1.5
divisao impossivel
0.0


*/

// A função gets() é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print() para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let limit = parseInt(gets());
for (let i = 0; i < limit; i++) {
    let line = gets().split(" ");
    let X = parseInt(line[0]);
    let Y = parseInt(line[1]);

//TODO: Complete os espaços em branco com uma possível solução para o desafio

if (Y == 0) {
        console.log("divisao impossivel");
    } else {
        let divisao = X / Y;
        divisao = parseFloat(divisao).toFixed(1);
        console.log(divisao);
    }
}