/*
Desafios Intermediários JavaScript - Órbi Web Game
4 / 5 - Brinquedos do Papai Noel

 Intermediário
 Princípios Básicos

Desafio
Papai Noel todo ano pede ajuda aos elfos para coletar todas as cartinhas das crianças e saber com o quê presenteá-las. Porém, não são todas as crianças que enviam as suas cartinhas e, como ele não quer deixar ninguém de fora, decidiu que vai presentear  mesmo quem não enviou a cartinha. Pensando em um gosto geral, decidiu dar um carrinho de brinquedo para os meninos, e uma boneca para as meninas.

Entrada
A primeira linha da entrada possui um inteiro N (0 < N &leq; 1000), que representa o número de crianças que não enviaram sua cartinha para o Papai Noel. As próximas N linhas consistem em duas strings, a primeira é o nome da criança, e a segunda é uma letra, que pode ser ‘M’, para dizer que é um menino, ou ‘F’ se for uma menina.

Saída
A saída consiste em 2 linhas. A primeira linha deve conter o número de carrinhos que o Papai Noel deve fazer, seguido pela palavra “carrinhos”, e na segunda linha, o número de bonecas seguido pela palavra “bonecas”.

 
Exemplo de Entrada	Exemplo de Saída
5
Milena F
Joao M
Rafaela F
Renata F
Felipe M

2 carrinhos
3 bonecas

 


*/

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções.

//leio quantas crianças serão informadas
var participantes = gets();

var criancas;
var array = [];

//laço para ler todas as crianças
for (var i = 0; i < participantes; i++) {
    criancas = gets().split(' ');
    //meu array recebe criancas na posição [1] porque isso é o que me importa (M ou F)
    array.push(criancas[1]);
}

//chamo a funcao de filtrar os meninos e uso .length para conta-los
const meninos = filtraMeninos(array).length;
//chamo a funcao de filtrar as meninas e uso .length para conta-las
const meninas = filtraMeninas(array).length;

//print com a saida de numero de meninos e meninas
print(`${meninos} carrinhos\n${meninas} bonecas`);

//funcao recebendo array para filtrar os meninos 
function filtraMeninos(arr) {
    return arr.filter(function(item) {
        return item === 'M';
    })
}

//funcao recebendo array para filtrar as meninas
function filtraMeninas(arr) {
    return arr.filter(function(item) {
        return item === 'F';
    })
}