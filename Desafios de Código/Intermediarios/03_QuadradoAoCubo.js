/*
Desafios Intermediários JavaScript - Órbi Web Game
3 / 5 - Quadrado e ao Cubo

 Básico
 Princípios Básicos

Desafio
Você terá o desafio de escrever um programa que leia um valor inteiro N (1 < N < 1000). Este N é a quantidade de linhas de saída que serão apresentadas na execução do programa.

Entrada
O arquivo de entrada contém um número inteiro positivo N.

Saída
Imprima a saída conforme o exemplo fornecido.

 
Exemplo de Entrada	Exemplo de Saída
5

1 1 1
2 4 8
3 9 27
4 16 64
5 25 125



*/

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções.

//leio a entrada do usuario
let linhas = parseInt(gets());

//faço a iteração de 1 ao numero informado
for (let i = 1; i <= linhas; i++) {
    let X = (i * i); //calculo o quadrado
    let Y = (i * i * i); //calculo o cubo

    print(i, X, Y); //print numero, quadrado, cubo
}