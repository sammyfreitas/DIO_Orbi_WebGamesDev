/*
Desafios Intermediários JavaScript - Órbi Web Game
1 / 5 - Análise de Números

 Básico
 Princípios Básicos

Desafio
Você deve fazer a leitura de 5 valores inteiros. Em seguida mostre quantos valores informados são pares, quantos valores informados são ímpares, quantos valores informados são positivos e quantos valores informados são negativos. Considere que o número zero é positivo, mas não pode ser considerado como positivo ou negativo.

Entrada
Você receberá 5 valores inteiros.

Saída
Exiba a mensagem conforme o exemplo de saída abaixo, sendo uma mensagem por linha e não esquecendo o final de linha após cada uma.

 
Exemplo de Entrada	Exemplo de Saída
-5
0
-3
-4
12

3 par(es)
2 impar(es)
1 positivo(s)
3 negativo(s)



*/

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções.

//declarando variaveis que irao contar os itens
let valoresPares = 0;
let valoresImpares = 0;
let valoresPositivos = 0;
let valoresNegativos = 0;

//for para iterar as 5 vezes
for (var i = 0; i < 5; i++) {
    //leio o valor do usuario a cada iteracao
    const valorInformadoPeloUsuario = parseInt(gets());

    //testo se o resto da divisao por 2 é igual a zero
    //se for então é par, caso contrário é impar
    if (valorInformadoPeloUsuario % 2 === 0) {
        valoresPares++;
    } else {
        valoresImpares++;
    }

    //só deixo entrar nesse laço se for diferente de 0
    //se for 0 nem é positivo e nem negativo, então não entra no laço
    if (valorInformadoPeloUsuario != 0) {
        if (valorInformadoPeloUsuario > 0) {
            valoresPositivos++;
        } else {
            valoresNegativos++;
        }
    }
}

console.log(`${valoresPares} par(es)`);
console.log(`${valoresImpares} impar(es)`);
console.log(`${valoresPositivos} positivo(s)`);
console.log(`${valoresNegativos} negativo(s)`);