/*
Desafios Iniciais JavaScript - Órbi Web Game
3 / 4 - Saída 1
 Básico
 Princípios Básicos

Desafio
O seu instrutor de lógica de programação, Damilson Bonetti, quer que você desenvolva uma tela com as seguintes características:

Conter 39 traços horizontais ( - ) na primeira linha;
Conter um traço vertical ( | ) embaixo do primeiro traço e do trigésimo nono traço da primeira linha, preencher no meio com espaço em branco;
Repita o procedimento 2 quatro vezes;
Repita o procedimento 1.
No final deve ficar igual a imagem a seguir:

--------------------------------------- (39 traços)

|                                     |

|                                     |

|                                     |

|                                     |

|                                     |

--------------------------------------- (39 traços)

Entrada
Não há.

Saída
A saída será impresso conforme a figura acima.

 
Exemplo de Entrada	Exemplo de Saída
 	
---------------------------------------

|                                     |

|                                     |

|                                     |

|                                     |

|                                     |

---------------------------------------

 


*/

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

console.log('---------------------------------------');
for (var i = 1; i <= 5; i++) {
    console.log('|                                    |');
}
console.log('---------------------------------------');

//TODO: Complete os espaços em branco com uma possível solução para o desafio