# Node.js-Express-Challenges

Crie um módulo alunos.js que exporta um array de alunos, uma função que filtra pelo nome e uma que filtra pela média (maior ou igual). Clear

Crie uma rota GET para “/alunos” que lista todos os alunos. Deve conter query opcional para filtrar por nome e por média. Ou seja, a rota pode ter este formato: “/alunos?nome=pedro”, “/alunos?media=7.5” ou esse “/alunos”. Esta rota deve utilizar as funções exportadas pelo módulo alunos.js; Clear

Crie uma rota POST para “/alunos/novo” e o corpo da requisição deve conter (nome, matrícula e média). Valide os campos passados e caso contrário indique um erro (400); Clear

Crie uma rota POST para “/alunos/deletar/:index” que indica qual aluno remover do array de dados (index). Trate a chamada se o aluno não existir (404); Clear

Crie uma rota POST para /alunos/atualizar/:index, que no corpo da requisição recebe um objeto (nome, média) e atualiza os dados do aluno naquela posição. Trate a chamada se o aluno não existir (404); Clear

Desafio 0: Escreva um arquivo JSON chamado db.json toda vez que ocorrer uma alteração nos dados do array de alunos; Clear

Desafio 1: Refatore a aplicação e mova para alunos.js, os métodos de deletar, adicionar e atualizar um aluno; CLEAR

Desafio 2: Substituir as rotas POST de atualizar e deletar com os métodos PUT e DELETE respectivamente, reformulando as URLs para todas utilizarem o mesmo caminho /alunos, mudando apenas o método utilizado; CLEAR

Desafio 3: Entregue a documentação desta API usando os recursos do Postman;

Desafio 4: Pesquise e aplique o logger morgan na aplicação;
