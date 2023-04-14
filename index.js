const express = require("express");
const app = express();
app.use(express.json());
const bd = require("./alunos");

app.get("/", (req, res) => {
  res.send("<h1>Hello, World!</h1> <p>O que faremos hoje? </p>");
});

//Parte 1
app.get("/alunos", (req, res) => {
  let = { nome, media } = req.query;
  if (nome) {
    res.json({ message: bd.acharNome(nome) });
  } else if (media) {
    res.json({ message: bd.filtrarMedia(media) });
  } else res.json({ message: bd.alunos });
});

//Parte 2
app.post("/alunos/novo", (req, res) => {
  const { nome, matricula, media } = req.body;
  if (nome !== undefined && matricula !== undefined && media !== undefined) {
    res.json({ message: `Aluno excluido com sucesso`, alunos: bd.alunos });
  } else {
    res.status(400).json({ message: "Dados inválidos para matricular" });
  }
});

//Parte3
app.post("/alunos/deletar/:index", (req, res) => {
  const index = Number(req.params.index);
  const alunoEncontrado = bd.alunos[index];
  if (alunoEncontrado !== undefined) {
    for (i = 0; i < bd.alunos.length; i++) {
      if ((i = alunoEncontrado)) {
        bd.alunos.splice(i, 1);
        res.json({ message: `Aluno excluido com sucesso`, alunos: bd.alunos });
      }
    }
  } else res.status(404).json({ message: "Aluno não encontrado" });
});

/* Na parte 4, acredito que a ordem das checagens estão incorretas, para facilitar você pode primeiro checar se existe o aluno usando a mesma checagem das linhas 33 e 34. Daí no else faria a resposta 404, e dentro do if checaria se nome e média são válidos para aí sim fazer as mudanças em 49 e 50. Caso nome e média sejam inválidos você pode tratar no else um erro 400 indicando que os dados fornecidos são inválidos. */
//Parte 4
app.post("/alunos/atualizar/:index", (req, res) => {
  const index = Number(req.params.index);
  const att = bd.alunos[index];
  const { nome, media } = req.body;
  if (att !== undefined) {
    if (nome !== undefined && media !== undefined) {
      bd.alunos[att].nome = nome;
      bd.alunos[att].media = media;
      res.json({
        message: `Alterações feitas com sucesso `,
        alunos: bd.alunos,
      });
    } else res.status(404).json({ message: "Dados Invalidos" });
  } else res.status(404).json({ message: "Aluno não encontrado" });
});

app.listen(3000, () => {
  console.log(` http://localhost:3000`);
});
