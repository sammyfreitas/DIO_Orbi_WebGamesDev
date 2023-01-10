/*
Desafios Intermediários JavaScript - Órbi Web Game
2 / 5 - Exibindo Números Pares

 Básico
 Princípios Básicos

Desafios
Crie um programa que leia um número e mostre os números pares até esse número, inclusive ele mesmo.

Entrada
Você receberá 1 valor inteiro N, onde N > 0.

Saída
Exiba todos os números pares até o valor de entrada, sendo um em cada linha. 

 
Exemplo de Entrada	Exemplo de Saída
6	
2
4
6



*/

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções.

//leio o numero do usuario
let n = parseInt(gets());

// EXPLICANDO ESSE TRECHO
//eu testo de o número é impar, se for eu retiro -1 pra ele se tornar o par anterior
//com isso, eu evito ficar testando dentro do for de exibição
//assim mostro so os pares até o número informado, sem precisar testar toda vez no for

if (n % 2 != 0) {
    n = n - 1;
}

//note que o contador "i" é incrementado de 2 em 2 (sempre indo para o próximo par).
for (let i = 2; i <= n; i += 2) {
    console.log(i);
}