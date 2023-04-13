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
    res.json({ nome, matricula, media });
  } else {
    res.status(400).json({ message: "Dados inválidos para matricular" });
  }
});

//Parte3
app.post("/alunos/deletar/:index", (req, res) => {
  const index = Number(req.params.index);
  const alunoEncontrado = bd.alunos[index];
  if (alunoEncontrado) {
    delete alunoEncontrado;
    res.json({ message: "Aluno deletado com sucesso" });
  } else res.status(404).json({ message: "Aluno não encontrado" });
});

app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
