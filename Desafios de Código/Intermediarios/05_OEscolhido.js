/*
Desafios Intermediários JavaScript - Órbi Web Game
5 / 5 - O Escolhido

 Básico
 Princípios Básicos

Desafio
As aulas do Prof. Xavier estão dando o que falar até no exterior, pois ele ensina Algorítmos de um jeito diferente aos seus alunos. Uma universidade dos EUA, que soube sobre o método do Prof. Xavier, quer selecionar um aluno para um intercâmbio no país. Para isso, ele possuem uma lista de inscrição com o número de cada aluno e sua nota. 

Para ajudá-los a encontrarem o melhor aluno que ganhará o intercâmbio, você deve desenvolver um programa. Só tem um detalhe, se a nota mais alta não for maior ou igual a 8, você deverá imprimir “Minimum note not reached”.

Entrada
O arquivo contém primeiro a quantidade de alunos (3 <= n <= 100) existentes e em seguida, os n alunos contendo o número da matrícula (0 < m < 1000000) de cada um, seguido da respectiva nota (0 <= nota <= 10.0, com 1 casa decimal).

Obs.: as notas não serão repetidas. Ou seja, não tem chance de ter dois alunos com a mesma nota.

Saída
Você deve imprimir o número do estudante que obteve a maior pontuação ou "Minimum note not reached" (sem aspas) caso nenhum estudante tenha tirado uma nota maior ou igual a 8.

 
Exemplo de Entrada	Exemplo de Saída
3
1000 5
1001 10
1002 6

1001

4
900775 5.7
201553 7.9
5032 6.2
2088 2.1

Minimum note not reached

 


*/

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções.

//quantidade de notas e matriculas que serao informadas
let line = gets();

//declaracao de variaveis auxiliares necessarias
let matricula;
let maiorNota = 0;
let nota;

//laço para percorrer quantidade de notas e matriculas
for (var i = 0; i < line; i++) {
    //leio matricula e nota
    entrada = gets();
    //split para separar nota e matricula
    entrada = entrada.split(" ");
    //recebo a ultima nota informada
    nota = parseFloat(entrada[1]);
    //testo de a nota informada é maior que a maior nota anteriormente informada
    if (nota > maiorNota) {
        //se a nota for maior, a matricula recebe a matricula atual
        matricula = entrada[0];
        //e maior nota vira a nota atual, que é maior que as anteriores
        maiorNota = nota;
    }
}

//se a maior nota encontrada for maior que 8.0 e mostro a matricula referente a essa nota
if (maiorNota >= 8) {
    print(matricula)
} else {
    //caso contrario, se nota for menor que 8.0 digo que não houve nota suficiente
    print("Minimum note not reached")
}